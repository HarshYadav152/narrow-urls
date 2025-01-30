"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Narrow = () => {
    const [url, setUrl] = useState("")
    const [narrowUrl, setNarrowUrl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "narrowUrl": narrowUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${narrowUrl}`)
                // console.log("generated url : ",generated)
                setUrl("")
                setNarrowUrl("")
                // console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        if (generated) {
            console.log("generated url : ", generated);
        }
    }, [generated]);
    return (
        <>
            <div className='body-bg'></div>
            <div className='mx-2'>
                <div className='mx-auto max-w-xl my-10 p-8 bg-slate-800 rounded-lg flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl'>Narrow your URLs</h1>
                    <div className='flex flex-col gap-3'>
                        <input className='px-3 py-2 focus:outline-blue-950 rounded-md text-blue-950' type='text' placeholder='Enter your url' onChange={e => { setUrl(e.target.value) }}></input>
                        <input className='px-3 py-2 focus:outline-blue-950 rounded-md text-blue-950' type='text' placeholder='Enter your preferred narrow URL name' onChange={e => { setNarrowUrl(e.target.value) }}></input>
                        <button onClick={generate} className='bg-purple-900 shadow-lg p-3 rounded-lg py-1 font-bold my-3'>Narrow</button>
                    </div>
                    {generated && <><span className='font-bold text-xl'>Your Narrow link</span>
                        <code><Link href={generated} target="_blank">{generated}</Link></code>
                    </>}
                </div>
            </div>
        </>
    )
}

export default Narrow