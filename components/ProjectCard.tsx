import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  techstack: string;
  gh: string;
  el: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techstack,
  gh,
  el,
}) => {
  return (
    <div className="card bg-[#FFFFFF] p-6 md:p-12 rounded-lg drop-shadow-lg grid grid-flow-row gap-y-2">
      <div className="description grid grid-flow-row gap-y-2">
        <h1 className="text-[1.7rem] font-medium">{title}</h1>
        <h2 className="text-lg">{description}</h2>
        <h2 className="text-lg font-semibold">{techstack}</h2>
      </div>
      <div className="links grid grid-flow-col w-fit gap-x-2">
        {/* To github repository */}
        {!gh ? (
          ""
        ) : (
          <Link target="_blank" href={gh}>
            <FaGithub className="text-2xl" />
          </Link>
        )}
        {/* To external link */}
        {!el ? (
          ""
        ) : (
          <Link target="_blank" href={el}>
            <FaExternalLinkAlt className="text-2xl" />
          </Link>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
