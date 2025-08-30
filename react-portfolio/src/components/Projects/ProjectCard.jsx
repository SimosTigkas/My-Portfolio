import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.container}>
      <div 
        className={styles.videoWrapper}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isPlaying ? (
          <>
            <video className={styles.video} controls autoPlay>
              <source src={project.demo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isHovered && (
              <>
                <img
                  src={getImageUrl(project.imageSrc)}
                  alt={`cover for ${project.title}`}
                  className={styles.coverImage}
                />
                <button
                  className={styles.playButton}
                  onClick={handlePlay}
                  aria-label="Play demo video"
                >
                  ▶
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <img
              src={getImageUrl(project.imageSrc)}
              alt={`cover for ${project.title}`}
              className={styles.coverImage}
            />
            <button className={styles.playButton} onClick={handlePlay} aria-label="Play demo video">▶</button>
          </>
        )}
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
