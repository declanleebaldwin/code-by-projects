import { useState, useEffect } from "react";

const projects = [
  {
    value: "Landing Page",
    tags: ["HTML / CSS"],
  },
  {
    value: "Portfolio",
    tags: ["HTML / CSS"],
  },
];

export const useFilteredProjects = ({ technology }) => {
  const [filteredProjects, setFilteredProjects] = useState();

  useEffect(() => {
    if (!technology) {
      setFilteredProjects(projects.map((project) => project.value));
      return;
    }
    if (technology === "All") {
      setFilteredProjects(projects.map((project) => project.value));
      return;
    }

    const filteredProjects = projects.filter((project) =>
      project.tags.includes(technology)
    );
    setFilteredProjects(filteredProjects.map((project) => project.value));
  }, [technology]);

  return filteredProjects;
};
