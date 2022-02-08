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
        <div className="relative md:p-12 h-full w-full">
          <div className="bg-gray-600 m-auto h-full w-full md:w-[50rem] rounded-xl text-white font-light">
            <div className="flex w-full">
              <div className="flex flex-col font-extrabold text-6xl pt-16 pl-16">
                <span className="mb-4">Escape Tutorial Hell.</span>
                <span className="mb-4">Build Projects.</span>
                <span>Get Hired.</span>
              </div>
            </div>
            <div className="bg-gray-200 w-full mt-12 mb-12 h-0.5"></div>
            <div className="flex flex-col pl-16">
              <div className="font-bold text-xl uppercase mb-6">
                how it works?
              </div>
              <div className="text-gray-500 text-base mb-4">
                Code by Projects is a personalised mentor programme which
                teaches you the skills you need to get hired in a real web
                developer role.
              </div>
              <div className="text-gray-500 text-base">
                Pick a project and get started.
              </div>
            </div>
            <div className="bg-gray-200 w-full mt-12 mb-12 h-0.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
