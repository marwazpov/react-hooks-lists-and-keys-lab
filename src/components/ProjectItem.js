import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies);
  const technologiesItems = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ));
  // const span= technologies.map((tech)=>{
  //   return <span>{technologies.name}</span>;
  // });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesItems}
      </div>
    </div>
  );
}

export default ProjectItem;
