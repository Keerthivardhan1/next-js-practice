import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center text-xl">
      {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p> */}
      <h1>Hello</h1>
      <div>
        <button>Home</button>
        <button>News</button>
        <button>Create</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
