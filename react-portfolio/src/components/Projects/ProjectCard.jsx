import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <a
      href={project.source}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkWrapper}
    >
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          {isPlaying ? (
            <video className={styles.video} controls autoPlay>
              <source src={project.demo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`cover for ${project.title}`}
                className={styles.coverImage}
              />
              <button
                className={styles.playButton}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsPlaying(true);
                }}
                aria-label="Play demo video"
              >
                ▶
              </button>
            </>
          )}
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.skills}>
          {project.skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};
