import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import vector_icon from "/vactor-icon.svg";
import { ProjectModal } from "../projectmodal/ProjectModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { defaultScreen } from "../../features/drawer/drawerSlice";

export const Projects = () => {
  const [modal, setMoadal] = useState(false);
  const { projects } = useSelector((state) => state.project);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(defaultScreen());
  }, []);

  const toggleModal = () => {
    setMoadal(!modal);
  };

  const handleClick = (e) => {
    navigate(`/${e.projectName}/${e._id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Projects</p>
        <div className={styles.new_project} onClick={toggleModal}>
          <img src={vector_icon} />
          <p>Create New Project</p>
        </div>
      </div>
      <div className={styles.main}>
        {projects.map((e) => (
          <div
            className={styles.card}
            key={e._id}
            onClick={() => handleClick(e)}
          >
            <div className={styles.heading_box}>
              <p>
                {e.projectName.split("")[0]}
                {e.projectName.split("")[1].toUpperCase()}
              </p>
            </div>
            <div className={styles.card_content}>
              <p>{e.projectName}</p>
              <p>4 Episodes</p>
              <p>Last updated a week ago</p>
            </div>
          </div>
        ))}
      </div>
      {modal && <ProjectModal toggleModal={toggleModal} />}
    </div>
  );
};
