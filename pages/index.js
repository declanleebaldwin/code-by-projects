import Head from "next/head";
import { LandingPageForm, PricingSection, Divider, ImageSection, Section, ReachOut } from "../components";
import { HOME_PAGE } from "../config"
export default function Home() {

  const onDiscordClick = () => {

  }

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
            <span className="mb-1 md:mb-4">Escape Tutorial Hell.</span>
            <span className="mb-1 md:mb-4">
              Build <span className="bg-purple-400">Projects.</span>
            </span>
            <span>Get Hired.</span>
          </div>
        </div>
        <Section
          title={HOME_PAGE.howItWorks.title}
          paragraphs={HOME_PAGE.howItWorks.paragraphs}
          link={HOME_PAGE.howItWorks.link}
        />
        <ImageSection image={HOME_PAGE.projectImage} />
        <Section
          title={HOME_PAGE.projects.title}
          paragraphs={HOME_PAGE.projects.paragraphs}
          link={HOME_PAGE.projects.link}
        />
        <Section
          title={HOME_PAGE.mentors.title}
          paragraphs={HOME_PAGE.mentors.paragraphs}
          link={HOME_PAGE.mentors.link}
        />
        <PricingSection
          title={HOME_PAGE.pricing.title}
          bullets={HOME_PAGE.pricing.bullets}
        />
        <Divider />
        <LandingPageForm />
        <ReachOut />
      </div>
    </div>
  );
}
