import { useState, useRef } from "react";
import { Select } from ".";
import { useFilteredProjects } from "../hooks";
import Image from "next/image";
import { useRouter } from "next/router";

const technologies = ["All", "HTML / CSS", "JavaScript", "React"];

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const LandingPageForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [technology, setTechnology] = useState('');
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState('');
  const type = 'Home Page'
  const router = useRouter();
  const filteredProjects = useFilteredProjects({ technology });
  const selectTechnology = (item) => {
    setProject('');
    setTechnology(item);
  };

  const selectProject = (item) => {
    setProject(item);
  };

  const onSubmitError = (error) => {
    console.log("onSubmitError", error);
    setLoading(false);
    // snackbar
  };

  const onSubmitSuccess = () => {
    console.log("onSubmitSuccess");
    setLoading(false);
    resetForm();
    router.push("/success");
  };

  const resetForm = () => {
    setEmail("");
    setTechnology('');
    setProject('');
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    if (loading) return;
    if (!!!email) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        email,
        technology,
        project,
        type
      }),
    })
      .then(() => onSubmitSuccess())
      .catch((error) => onSubmitError(error));
  };

  return (
    <form
      name="homePageForm"
      method="post"
      className="flex flex-col pl-16 pr-16"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="homePageForm" />
      <input
        type='hidden'
        name="technology" value={technology} />
      <input
        type='hidden'
        name="project" value={project} />
      <input
        type='hidden'
        name="type" value={type} />
      <div className="font-bold text-xl uppercase mb-6 tracking-wider">join</div>
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
          onBlur={() => setError(false)}
          name="email"
          className={
            error
              ? "shadow-inner focus:outline-none focus:shadow-inner w-full bg-gray-400 pt-0 pb-0 pl-6 text-gray-300 placeholder:text-gray-300 text-base rounded-lg h-[4.25rem]"
              : "focus:outline-none focus:shadow-inner w-full bg-gray-400 pt-0 pb-0 pl-6 text-gray-300 placeholder:text-gray-300 text-base rounded-lg h-[4.25rem]"
          }
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="Email Address"
        ></input>
      </div>
      <div
        className={
          loading
            ? "relative ease-in-out duration-300 bg-purple-500 flex items-center justify-center rounded-lg h-[4.25rem]"
            : "relative ease-in-out duration-300 hover:bg-purple-400 bg-purple-500 flex items-center justify-center rounded-lg cursor-pointer h-[4.25rem]"
        }
      >
        {loading ? (
          <div className="absolute flex items-center justify-center">
            <div className="animate-spin relative w-10 h-10">
              <Image
                objectFit="cover"
                layout="fill"
                src="/spinner.svg"
                alt="loading"
              />
            </div>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full h-full text-white uppercase font-semibold text-base tracking-wider"
          >
            Join Project
          </button>
        )}
      </div>
    </form>
  );
};
export default LandingPageForm;
