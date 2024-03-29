import Head from "next/head";
import { MyLink } from "../components";

export default function Success() {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
      <Head>
        <title>Code By Projects</title>
        <meta name="description" content="Code By Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="relative bg-gray-600 m-auto w-full md:w-[45rem] md:rounded-xl text-white font-light md:mt-8 md:mb-8"
      >
        <div className="flex flex-col p-16 p16">
          <div className="font-bold text-xl uppercase mb-6 tracking-wider">
           Thank you!
          </div>
          <div className="text-gray-500 text-base mb-4">
            Thank you for signing up to Code By Projects.
          </div>
          <div className="text-gray-500 text-base mb-4">
            You will receive an email shortly with details of your project and/or mentor.
          </div>
          <MyLink text="Back" href="/" />
        </div>
      </div>
    </div>
  );
}
