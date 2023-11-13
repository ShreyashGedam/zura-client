import styles from "./NoProject.module.css";
import vector_icon from "/vactor-icon.svg";
import { ProjectModal } from "../projectmodal/ProjectModal";
import { useState } from "react";

export const NoProject = () => {
  const [modal, setMoadal] = useState(false);

  const toggleModal = () => {
    setMoadal(!modal);
  };
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.heading}>Create a New Project</p>
        <div className={styles.image_box}>
          <img src="/people.PNG" />
        </div>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <div className={styles.new_project} onClick={toggleModal}>
          <img src={vector_icon} />
          <p>Create New Project</p>
        </div>
      </div>
      {modal && <ProjectModal toggleModal={toggleModal} />}
    </div>
  );
};
