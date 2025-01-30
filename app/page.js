import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="body-bg"></div>
      <section className="grid grid-cols-1 md:grid-cols-2 h-[50vh] w-[75vw] gap-3 mx-auto">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-bold text-cyan-400">Best URLs narrower</p>
          <p className="text-center text-amber-100">Narrow or shorten your long and massy URLs in very easy to learn single line with your keyword</p>
          <div className="list-none">
            <Link href='/narrow'><button className='bg-purple-900 text-blue-200 shadow-lg m-2 p-3 rounded-lg py-1 font-bold'>Narrower - Try Now</button></Link>
            {/* <Link href='/github'><button className='bg-purple-900 shadow-lg m-2 p-3 rounded-lg py-1 font-bold'>Github</button></Link> */}
          </div>
        </div>
        <div className="flex relative">
          <Image alt="url narrower" src={"/urlimage-1.jpg"} width="500" height="100" />
        </div>
      </section>
    </>
  );
}
