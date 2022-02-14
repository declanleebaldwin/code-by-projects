import { useState, useRef } from "react";
import { Select } from ".";
import { useFilteredProjects } from "../hooks";
const technologies = ["All", "HTML / CSS", "JavaScript", "React"];

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const LandingPageForm = () => {
  const [email, setEmail] = useState("");
  const [technology, setTechnology] = useState();
  const [project, setProject] = useState();
  const formRef = useRef();
  const filteredProjects = useFilteredProjects({ technology });
  const selectTechnology = (item) => {
    setProject();
    setTechnology(item);
  };

  const selectProject = (item) => {
    setProject(item);
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();

    const form = formRef.current;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        email,
        technology,
        project,
      }),
    })
      .then(() => console.log("success"))
      .catch((error) => alert(error));
  };

  return (
    <form
      name="contact"
      method="POST"
      className="flex flex-col pl-16 pr-16"
      action="/thanks/"
      data-netlify="true"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="technology" value={technology ?? ""} />
      <input type="hidden" name="project" value={project ?? ""} />
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
          name="email"
          className="focus:outline-none focus:shadow-inner w-full bg-gray-400 pt-0 pb-0 pl-6 text-gray-300 placeholder:text-gray-300 text-base rounded-lg h-[4.25rem]"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        ></input>
      </div>
      <div className="bg-purple flex items-center justify-center rounded-lg cursor-pointer h-[4.25rem]">
        <button
          type="submit"
          className="text-white uppercase font-semibold text-base tracking-wider"
        >
          join project
        </button>
      </div>
    </form>
  );
};
export default LandingPageForm;
