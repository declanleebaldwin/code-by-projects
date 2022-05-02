import Head from "next/head";
import { ProjectCard } from "../components";
import { PROJECT_PAGE } from "../config";

const ProjectSection = ({ title, projects }) => {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-xl uppercase mb-6 tracking-wider">
        {title}
      </div>
      <div className="flex flex-col md:flex-row">
        {projects.length > 0 && projects.map((p, i) => {
          return (
            <div key={i} className="flex">
              <ProjectCard
                imageSrc={p.imageSrc}
                imageAlt={p.imageAlt}
                title={p.title}
                desc={p.desc}
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
  return (
    <div className="relative">
      <Head>
        <title>Code By Projects</title>
        <meta name="description" content="Code By Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:m-auto h-full w-full md:w-[60rem] md:rounded-xl text-white font-light mx-8">
        <Hero />
        <ProjectSection title={PROJECT_PAGE.beginner.title} projects={PROJECT_PAGE.beginner.projects} />
      </div >
    </div>
  );
}
