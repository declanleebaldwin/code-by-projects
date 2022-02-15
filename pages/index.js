import Head from "next/head";
import Image from "next/image";
import { LandingPageForm } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code By Projects</title>
        <meta name="description" content="Code By Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="main"
        className="relative bg-gray-600 m-auto h-full w-full md:w-[45rem] md:rounded-xl text-white font-light md:mt-8 md:mb-8"
      >
        <div className="flex w-full">
          <div className="flex flex-col font-extrabold text-4xl md:text-6xl pt-16 pl-16 pr-16">
            <span className="mb-1 md:mb-4">Escape Tutorial Hell.</span>
            <span className="mb-1 md:mb-4">
              Build <span className="bg--400">Projects.</span>
            </span>
            <span>Get Hired.</span>
          </div>
        </div>
        <div className="bg-gray-200 w-full mt-12 mb-12 h-0.5"></div>
        <div className="flex flex-col pl-16 pr-16">
          <div className="font-bold text-xl uppercase mb-6">how it works?</div>
          <div className="text-gray-500 text-base mb-4">
            Code by Projects is a personalised mentor programme which teaches
            you the skills you need to get hired in a real web developer role.
          </div>
          <div className="text-gray-500 text-base">
            Pick a project and get started.
          </div>
        </div>
        <div className="bg-gray-200 w-full mt-12 mb-12 h-0.5"></div>
        <div className="flex flex-col pl-16 pr-16">
          <div className="font-bold text-xl uppercase mb-6">projects</div>
          <div className="text-gray-500 text-base mb-4">
            Each project is broken down into tickets.
          </div>
          <div className="text-gray-500 text-base mb-4">
            A ticket represents a ticket you would get assigned in a real job
            and will have a set of requirements you need to fulfill.
          </div>
          <div className="text-gray-500 text-base">
            Each ticket will help you develop your skills as a web developer and
            most importantly help you become self reliant when it comes to
            solving problems.
          </div>
        </div>
        <div className="bg-gray-200 w-full mt-12 mb-12 h-0.5"></div>
        <div className="flex flex-col pl-16 pr-16">
          <div className="font-bold text-xl uppercase mb-6">mentors</div>
          <div className="text-gray-500 text-base mb-4">
            Don’t worry if you get stuck, there will be plenty of help along the
            way.
          </div>
          <div className="text-gray-500 text-base mb-4">
            You will be assigned a mentor - this is supposed to replicate having
            a senior developer in a real job.
          </div>
          <div className="text-gray-500 text-base">
            With your mentor you can discuss your tickets, ask for code reviews
            or even go over a web development topic you are struggling with.
          </div>
        </div>
        <div className="bg-gray-200 w-full mt-12 mb-12 h-0.5"></div>
        <div className="flex flex-col pl-16 pr-16">
          <div className="font-bold text-xl uppercase mb-6">pricing</div>
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
                From £50/project.
              </div>
            </div>
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
                Try your first ticket for free.
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
                Mentor session £50/hour.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-full mt-12 mb-12 h-0.5"></div>
        <LandingPageForm />
        <div className="bg-gray-200 w-full mt-12 mb-12 h-0.5"></div>
        <div className="flex flex-col pl-16 pr-16 pb-16">
          <div className="font-bold text-xl uppercase mb-6">reach out</div>
        </div>
      </div>
    </div>
  );
}
