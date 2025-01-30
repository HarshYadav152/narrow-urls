import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="body-bg"></div>
      <section className="grid grid-cols-2 h-[50vh] w-[75vw] mx-auto">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-bold">Best URLs narrower</p>
          <p>Narrow or shorten your long and massy URLs in very easy to learn single line with your keyword</p>
          <div className="list-none">
            <Link href='/narrow'><button className='bg-purple-900 shadow-lg m-2 p-3 rounded-lg py-1 font-bold'>Narrower</button></Link>
            <Link href='/github'><button className='bg-purple-900 shadow-lg m-2 p-3 rounded-lg py-1 font-bold'>Github</button></Link>
          </div>
        </div>
        <div className="flex relative">
          <Image alt="url narrower" src={"/urlimage-1.jpg"} fill={true} />
        </div>
      </section>
    </>
  );
}
