import Head from "next/head";
import { Section, PricingSection, SignUpForm, ReachOut, ImageSection } from "../components";
import { MENTOR_PAGE } from "../config";

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
        <Section
          title={MENTOR_PAGE.wereHereToHelp.title}
          paragraphs={MENTOR_PAGE.wereHereToHelp.paragraphs}
          link={MENTOR_PAGE.wereHereToHelp.link}
        />
        <Section
          title={MENTOR_PAGE.codeReviews.title}
          paragraphs={MENTOR_PAGE.codeReviews.paragraphs}
          link={MENTOR_PAGE.codeReviews.link}
        />
        <ImageSection image={MENTOR_PAGE.codeReviewImage} />
        <PricingSection
          title={MENTOR_PAGE.pricing.title}
          bullets={MENTOR_PAGE.pricing.bullets}
        />
        <SignUpForm
          title={MENTOR_PAGE.signUp.title}
          paragraphs={MENTOR_PAGE.signUp.paragraphs}
          button={MENTOR_PAGE.signUp.button}
          data='mentor_page'
        />
        <ReachOut />
      </div>
    </div >
  );
}
