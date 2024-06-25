import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-xl flex-col items-start px-8 py-24 md:max-w-7xl"
    >
      <div className="w-full text-center md:w-1/2 md:text-left">
        <h1 className="font-title text-xl font-bold">Take part in the event</h1>
        <p className="mt-8 text-base">We are pleased to announce our launch</p>
      </div>
      <div className="mt-16 flex w-full flex-col items-center gap-8 text-base md:flex-row md:justify-start">
        <div className="flex flex-row items-center gap-2 font-semibold">
          <Image
            src="https://utfs.io/f/6c8fa53e-69a8-4674-ab2e-fc5b2a584eaa-8s4rn.svg"
            alt="time icon"
            width={0}
            height={0}
            sizes="100vw"
            className="w-7"
          ></Image>
          <p>July 10, 2024</p>
        </div>
        <Link href="#register">
          <button className="h-14 w-48">Join now</button>
        </Link>
      </div>
    </section>
  );
}
