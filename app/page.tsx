import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center text-xl flex-col">
      {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p> */}
      <h1>krerthivardhan</h1>
      <div className="flex gap-3 ">
        <Link  href='/pages/home'>Home</Link>
        <Link href='/pages/news'>News</Link>
        <Link href='/pages/create'>Create</Link>
        <Link href='/pages/contact'>Contact</Link>
      </div>
    </div>
  );
}
