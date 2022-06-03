import Head from "next/head";
import { ProjectCard } from "../components";
import { PROJECT_PAGE, PROJECTS, PROJECT_DIFFICULTIES } from "../config";

const ProjectSection = ({ title, projectKeys }) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="font-bold text-xl uppercase mb-6 tracking-wider">
        {title}
      </div>
      <div className="flex flex-col md:flex-row">
        {projectKeys.length > 0 && projectKeys.map((key) => {
          const info = PROJECTS[key]
          return (
            <div key={key} className="flex mr-8 mb-8">
              <ProjectCard
                href={info.href}
                imageSrc={info.imageSrc}
                imageAlt={info.imageAlt}
                title={info.title}
                desc={info.desc}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col font-extrabold text-4xl md:text-6xl pt-16 pb-16">
        <span>Projects</span>
      </div>
    </div>
  )
}

export default function Projects() {
  const beginnerProjectKeys = Object.keys(PROJECTS).filter((key => PROJECTS[key].difficulty === PROJECT_DIFFICULTIES.beginner))
  return (
    <div className="relative">
      <Head>
        <title>Code By Projects</title>
        <meta name="description" content="Code By Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:m-auto h-full w-full md:w-[60rem] md:rounded-xl text-white font-light mx-8">
        <Hero />
        <ProjectSection title={PROJECT_PAGE.beginner.title} projectKeys={beginnerProjectKeys} />
        <div className="flex flex-col mb-16">
          <div className="font-bold text-xl uppercase mb-6 tracking-wider">
            {PROJECT_PAGE.intermediate.title}
          </div>
          <div className="text-gray-500 text-sm">Coming Soon...</div>
        </div>
        <div className="flex flex-col mb-16">
          <div className="font-bold text-xl uppercase mb-6 tracking-wider">
            {PROJECT_PAGE.expert.title}
          </div>
          <div className="text-gray-500 text-sm">Coming Soon...</div>
        </div>
      </div >
    </div>
  );
}
