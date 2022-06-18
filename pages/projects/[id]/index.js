import Head from "next/head";
import { useRouter } from 'next/router'
import { Section, FixedSizeImageSection, ImageSection, PricingSection, SignUpForm, ReachOut, VideoSection } from "../../../components";
import { PROJECTS, PROJECT_DETAILS_PAGE } from '../../../config'

const Project = () => {
  const router = useRouter()
  const { id } = router.query
  const project = PROJECTS[id]
  if (!project) {
    return <></> // redirect to projects page, error snackbar
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
            <span className="mb-1 md:mb-4">{project.title}</span>
          </div>
        </div>
        <Section
          title={project.details.makingSection.title}
          paragraphs={project.details.makingSection.paragraphs}
          link={project.details.makingSection.link}
        />
        {project.details.showcase.video && <VideoSection video={project.details.showcase.video.src} />}
        {project.details.showcase.image && <ImageSection image={project.details.showcase.image.src} padding={false} />}
        <Section
          title={PROJECT_DETAILS_PAGE.includedSection.title}
          paragraphs={PROJECT_DETAILS_PAGE.includedSection.paragraphs}
          link={PROJECT_DETAILS_PAGE.includedSection.link}
          bulleted={true}
        />
        <FixedSizeImageSection
          title={PROJECT_DETAILS_PAGE.exampleTicketSection.title}
          image={PROJECT_DETAILS_PAGE.exampleTicketSection.image}
          width={PROJECT_DETAILS_PAGE.exampleTicketSection.width}
          height={PROJECT_DETAILS_PAGE.exampleTicketSection.height} />
        <PricingSection
          title={project.details.pricing.title}
          bullets={project.details.pricing.bullets}
        />
        <SignUpForm
          title={PROJECT_DETAILS_PAGE.join.title}
          paragraphs={PROJECT_DETAILS_PAGE.join.paragraphs}
          button={PROJECT_DETAILS_PAGE.join.button}
          type={`Project Details - ${project.title}`}
        />
        <ReachOut />
      </div>
    </div >
  )
}

export default Project