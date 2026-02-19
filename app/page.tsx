import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <main className="flex flex-col gap-10 min-h-screen  bg-zinc-50">
      <nav className="flex items-center justify-between px-5 py-3 h-[48px] border-b-zinc-200 border-b w-full "> 
      <Image src="/next.svg" alt="logo" width={100} height={100} />
      <div className="flex items-center gap-10 text-zinc-950 mr-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      </nav> 
      <section className="flex flex-col items-center h-full">
        <div className="flex flex-col gap-2 items-start">
        <h1 className="text-4xl font-bold text-zinc-950">
          Hi, I'm Ailyn
        </h1>
        <p className="text-zinc-500 text-xl">
          I'm a software engineer with a passion for building web applications.
        </p>
        </div>

      </section>
    </main>
  );
}
