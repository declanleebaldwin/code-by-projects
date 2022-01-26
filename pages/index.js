import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code By Projects</title>
        <meta name="description" content="Code By Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="main" className="absolute top-0 left-0 bottom-0 right-0">
        <div className="relative p-8 h-full w-full">
          <div
            className="bg-gray-600 m-auto h-full rounded-xl"
            style={{ width: "50%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
