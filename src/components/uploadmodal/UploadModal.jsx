import { Input } from "@chakra-ui/react";
import styles from "./UploadModal.module.css";
import cross from "/cross.svg";
import youtube from "/youtubesmall.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/subprojects/subprojectSlice";

export const UploadModal = (props) => {
  const { toggleModal, projectId } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleChage = () => {
    if (!link || !name) return;
    dispatch(
      addTask({ projectID: projectId, taskName: name, description: link })
    );
    toggleModal();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.names}>
            <img src={youtube} alt="" />
            <p>Upload from Youtube</p>
          </div>
          <img src={cross} alt="" onClick={toggleModal} />
        </div>
        <div className={styles.info}>
          <p className={styles.inputname}>Name</p>
          <Input
            h={"6.0vh"}
            fontSize={"2vh"}
            focusBorderColor="primary"
            marginBottom={"1vh"}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ marginTop: "2.7vh" }} className={styles.inputname}>
            Link
          </p>
          <Input
            h={"6.0vh"}
            fontSize={"2vh"}
            focusBorderColor="primary"
            marginBottom={"1vh"}
            onChange={(e) => setLink(e.target.value)}
          />
          <div className={styles.upload} onClick={handleChage}>
            <p>Upload</p>
          </div>
        </div>
      </div>
    </div>
  );
};
