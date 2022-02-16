import Head from "next/head";

export default function Success() {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
      <Head>
        <title>Code By Projects</title>
        <meta name="description" content="Code By Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="main"
        className="relative bg-gray-600 m-auto w-full md:w-[45rem] md:rounded-xl text-white font-light md:mt-8 md:mb-8"
      >
        <div className="flex flex-col p-16 p16">
          <div className="font-bold text-xl uppercase mb-6 tracking-wider">
            Project Joined!
          </div>
          <div className="text-gray-500 text-base">
            Thanks for signing up for Code by Projects. You will receive an
            email shortly with details of your first ticket.
          </div>
        </div>
      </div>
    </div>
  );
}
