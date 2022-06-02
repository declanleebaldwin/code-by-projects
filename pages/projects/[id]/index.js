import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'
import { Section, FixedSizeImageSection, PricingSection, SignUpForm, ReachOut, ImageSection, Divider } from "../../../components";
import { PROJECTS } from '../../../config'

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
        <Section
          title={project.details.includedSection.title}
          paragraphs={project.details.includedSection.paragraphs}
          link={project.details.includedSection.link}
        />
        <FixedSizeImageSection
          title={project.details.exampleTicketSection.title}
          image={project.details.exampleTicketSection.image}
          width={project.details.exampleTicketSection.width}
          height={project.details.exampleTicketSection.height} />
        <PricingSection
          title={project.details.pricing.title}
          bullets={project.details.pricing.bullets}
        />
        <SignUpForm
          title={project.details.join.title}
          paragraphs={project.details.join.paragraphs}
          button={project.details.join.button}
        />
        <ReachOut />
      </div>
    </div >
  )
}

export default Project