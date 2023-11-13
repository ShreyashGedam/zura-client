import styles from "./Upload.module.css";
import youtube from "/youtube.svg";
import spotify from "/spotify.svg";
import rss from "/rss.svg";
import cloud from "/cloud.svg";
import { useState } from "react";
import { UploadModal } from "../uploadmodal/UploadModal";
import { useParams } from "react-router-dom";

export const Upload = () => {
  const [modal, setMoadal] = useState(false);
  const params = useParams();
  const { projectId } = params;

  const toggleModal = () => {
    setMoadal(!modal);
  };

  return (
    <div className={styles.container}>
      <p className={styles.upload}>Upload</p>
      <div className={styles.cardbox}>
        <div onClick={toggleModal}>
          <img src={youtube} alt="" />
          <div>
            <p>Upload</p>
            <p>Youtube Video</p>
          </div>
        </div>
        <div onClick={toggleModal}>
          <img src={spotify} alt="" />
          <div>
            <p>Upload</p>
            <p>Soptify Podcast</p>
          </div>
        </div>
        <div onClick={toggleModal}>
          <img src={rss} alt="" />
          <div>
            <p>Upload</p>
            <p>RSS Feed</p>
          </div>
        </div>
        <div onClick={toggleModal}>
          <img src={youtube} alt="" />
          <div>
            <p>Upload</p>
            <p>Youtube Video</p>
          </div>
        </div>
        <div onClick={toggleModal}>
          <img src={spotify} alt="" />
          <div>
            <p>Upload</p>
            <p>Soptify Podcast</p>
          </div>
        </div>
        <div onClick={toggleModal}>
          <img src={rss} alt="" />
          <div>
            <p>Upload</p>
            <p>RSS Feed</p>
          </div>
        </div>
      </div>
      <p className={styles.or}>or</p>
      <div className={styles.upload_box}>
        <img src={cloud} alt="" />
        <p className={styles.drop}>
          Select a file or drag and drop here (Podcast Media or Transcription
          Text)
        </p>
        <p className={styles.drop2}>
          MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
        </p>
        <div className={styles.lable}>
          <p>Select File</p>
        </div>
      </div>
      {modal && <UploadModal toggleModal={toggleModal} projectId={projectId} />}
    </div>
  );
};
