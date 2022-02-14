import { useState } from "react";
import { Select } from ".";
import { useFilteredProjects } from "../hooks";
const technologies = ["All", "HTML / CSS", "JavaScript", "React"];

const LandingPageForm = () => {
  const [email, setEmail] = useState("");
  const [technology, setTechnology] = useState();
  const [project, setProject] = useState();
  const filteredProjects = useFilteredProjects({ technology });
  const selectTechnology = (item) => {
    setProject();
    setTechnology(item);
  };

  const selectProject = (item) => {
    setProject(item);
  };

  return (
    <div className="flex flex-col pl-16 pr-16">
      <div className="font-bold text-xl uppercase mb-6">join</div>
      <div className="text-gray-500 text-base mb-4">
        Start your first project for free.
      </div>
      <div className="text-gray-500 text-base mb-8">
        Sign up and we’ll email you your first ticket.
      </div>
      <Select
        items={technologies}
        selected={technology}
        onSelected={selectTechnology}
        placeholder="Technology"
      />

      {filteredProjects && (
        <Select
          items={filteredProjects}
          selected={project}
          onSelected={selectProject}
          placeholder="Project"
        />
      )}
      <div className="relative mb-8">
        <input
          className="focus:outline-none focus:shadow-inner w-full bg-gray-400 pt-0 pb-0 pl-6 text-gray-300 placeholder:text-gray-300 text-base rounded-lg h-[4.25rem]"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        ></input>
      </div>
      <div className="bg-purple flex items-center justify-center rounded-lg cursor-pointer h-[4.25rem]">
        <div className="text-white uppercase font-semibold text-base tracking-wider">
          join project
        </div>
      </div>
    </div>
  );
};
export default LandingPageForm;
