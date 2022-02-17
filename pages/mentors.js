import Head from "next/head";

export default function Mentors() {
  return (
    <div className="slideIn relative">
    <Head>
      <title>Code By Projects</title>
      <meta name="description" content="Code By Projects" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="m-auto h-full w-full md:w-[60rem] md:rounded-xl text-white font-light md:mt-8 md:mb-8">
      <div className="flex w-full">
        <div className="flex flex-col font-extrabold text-4xl md:text-6xl pt-16 pb-16">
          <span>Mentors.</span>
        </div>
      </div>
       
    </div>
  </div>
  );
}
