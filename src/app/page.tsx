import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="text-2xl sm:text-4xl font-bold mt-8">
        Welcome to Next.js!
      </h1>
      <p className="text-center mt-4 text-sm sm:text-base">
        Get started by editing <code>src/app/page.tsx</code>.
      </p>
    </div>
  );
}
