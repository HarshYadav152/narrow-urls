"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Narrow = () => {
    const [url, setUrl] = useState("")
    const [narrowUrl, setNarrowUrl] = useState("")
    const [generated, setGenerated] = useState("")
    const [loading, setLoading] = useState("Generate")
    const [copied, setCopied] = useState(false)
    const [validation, setValidation] = useState({ url: true, narrowUrl: true })

    useEffect(() => {
        if (generated) {
            setLoading('Generate');
            setUrl('');
            setNarrowUrl('');
        }
    }, [generated]);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    const validateInputs = () => {
        // Basic URL validation
        const urlValid = url.trim() !== "" && /\.[a-zA-Z]{2,}$/.test(url);
        // Basic narrowUrl validation - only allow alphanumeric and hyphen
        const narrowUrlValid = /^[a-zA-Z0-9-]+$/.test(narrowUrl);

        setValidation({
            url: urlValid,
            narrowUrl: narrowUrlValid
        });

        return urlValid && narrowUrlValid;
    };

    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(generated);
            setCopied(true);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const generate = () => {
        if (!validateInputs()) {
            return;
        }

        setLoading("Generating...")
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // Auto-prepend https:// if missing
        const formattedUrl = url.startsWith('http') ? url : `https://${url}`;

        const raw = JSON.stringify({
            "url": formattedUrl,
            "narrowUrl": narrowUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${narrowUrl}`)
                alert(result.message)
            })
            .catch((error) => {
                console.error(error);
                alert(`Error: ${error.message || 'Failed to generate URL'}`);
            })
            .finally(() => {
                setLoading('Generate');
            })
    }

    return (
        <>
            <div className='body-bg'></div>
            <div className='mx-2'>
                <div className='mx-auto max-w-xl my-10 p-8 bg-slate-800 rounded-lg flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl'>Narrow your URLs</h1>
                    <div className='flex flex-col gap-3'>
                        {/* <div className='w-10'> */}
                            <input
                                className='px-3 py-2 focus:outline-blue-950 rounded-md text-blue-950'
                                type='text'
                                value={url}
                                placeholder='Enter your url'
                                onChange={e => {
                                    setUrl(e.target.value);
                                    setValidation({ ...validation, url: true });
                                }}
                            />
                            {!validation.url && <p className="text-red-400 text-xs mt-1">Please enter a URL</p>}
                        {/* </div> */}
                        {/* <div> */}
                            <input
                                className='px-3 py-2 focus:outline-blue-950 rounded-md text-blue-950'
                                type='text'
                                value={narrowUrl}
                                placeholder='Enter your preferred narrow URL name'
                                onChange={e => {
                                    setNarrowUrl(e.target.value);
                                    setValidation({ ...validation, narrowUrl: true });
                                }}
                            />
                            {!validation.narrowUrl && <p className="text-red-400 text-xs mt-1">URL name can only contain letters, numbers, and hyphens</p>}
                        {/* </div> */}
                        <button
                            onClick={generate}
                            className='bg-purple-900 shadow-lg p-3 rounded-lg py-1 font-bold my-3'
                        >
                            {loading}
                        </button>
                    </div>
                    {generated &&(
                        <div className="p-4 bg-slate-700 rounded-lg">
                        <span className='font-bold text-xl'>Your Narrow link</span>
                        <div className="mt-2 flex items-center justify-between p-2 bg-slate-600 rounded">
                            <code className="overflow-x-auto max-w-[80%]">
                                <Link href={generated} target="_blank" className="text-blue-300 hover:text-blue-200">
                                    {generated}
                                </Link>
                            </code>
                            <button 
                                onClick={handleCopyToClipboard}
                                className="bg-purple-900 hover:bg-purple-800 px-3 py-1 rounded text-sm"
                            >
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Narrow