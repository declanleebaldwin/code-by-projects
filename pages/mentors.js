import Head from "next/head";
import Image from "next/image";
import { Divider } from "../components";

export default function Mentors() {
  return (
    <div className="relative">
      <Head>
        <title>Code By Projects</title>
        <meta name="description" content="Code By Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-600 m-auto h-full w-full md:w-[45rem] md:rounded-xl text-white font-light md:mt-8 md:mb-8">
        <div className="flex w-full">
          <div className="flex flex-col font-extrabold text-4xl md:text-6xl pt-16 pl-16 pr-16">
            <span className="mb-1 md:mb-4">Mentors</span>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col pl-16 pr-16">
          <div className="font-bold text-xl uppercase mb-6 tracking-wider">
            We're Here To Help?
          </div>
          <div className="text-gray-500 text-base mb-4">
            Whether you’re stuck on a JavaScript topic, need guidance on how to approach a project or want a code review, our mentors are here to help.
          </div>
          <div className="text-gray-500 text-base">
            Each of our mentors have been working in the industry for 5+ years.
          </div>
        </div>
        <Divider />
        <div className="flex flex-col pl-16 pr-16">
          <div className="font-bold text-xl uppercase mb-6 tracking-wider">
            Code Reviews
          </div>
          <div className="text-gray-500 text-base mb-4">
            Like with any skill, building the right habits is vital to being successful. This is no different with learning to code.
          </div>
          <div className="text-gray-500 text-base mb-4">
            Code review help you build these habits.
          </div>
          <div className="text-gray-500 text-base mb-4">
            After you have completed a ticket or project, a Mentor can review your code and give you tips on where you can improve.
          </div>
          <div className="text-gray-500 text-base">
            There are always multiple ways to approach a problem, but picking the right way for the right reasons is part of what will make you a successful developer!
          </div>
        </div>
        <Divider />
        <div className="flex flex-col pl-16 pr-16">
          <div className="font-bold text-xl uppercase mb-6 tracking-wider">
            pricing
          </div>
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 relative border-2 border-white border-solid rounded-full mr-4">
                <Image
                  objectFit="cover"
                  src="/chevron_right.svg"
                  layout="fill"
                  alt="chevron-right"
                />
              </div>
              <div className="text-gray-500 text-base flex-1">
                Code Reviews £25 per ticket
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 relative border-2 border-white border-solid rounded-full mr-4">
                <Image
                  objectFit="cover"
                  src="/chevron_right.svg"
                  layout="fill"
                  alt="chevron-right"
                />
              </div>
              <div className="text-gray-500 text-base flex-1">
                Mentor session £50/hour
              </div>
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </div >
  );
}
