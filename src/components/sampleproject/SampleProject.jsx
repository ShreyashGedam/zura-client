import styles from "./SampleProject.module.css";
import youtube from "/youxs.svg";
import spotify from "/spotifyxs.svg";
import blank from "/blank.svg";
import { useEffect, useState } from "react";
import { UploadModal } from "../uploadmodal/UploadModal";
import { Transcript } from "../transcript/Transcript";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../features/subprojects/subprojectSlice";
import moment from "moment/moment";

export const SampleProject = (props) => {
  const { tasks } = props;
  const [modal, setMoadal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  const { projectName, projectId } = params;

  const toggleModal = () => {
    setMoadal(!modal);
  };

  const handleClick = (e) => {
    setEditData({
      taskId: e._id,
      description: e.description,
    });
    setEdit(true);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      {edit ? (
        <Transcript data={editData} setEdit={setEdit} />
      ) : (
        <div className={styles.container}>
          <p className={styles.upload}>{projectName}</p>
          <div className={styles.cards}>
            <div onClick={toggleModal}>
              <img src={youtube} />
              <div>
                <p>Upload</p>
                <p>Youtube Video</p>
              </div>
            </div>
            <div onClick={toggleModal}>
              <img src={spotify} />
              <div>
                <p>Upload</p>
                <p>Spotify Podcast</p>
              </div>
            </div>
            <div onClick={toggleModal}>
              <img src={blank} />
              <div>
                <p>Upload Media</p>
                <p>or Text File</p>
              </div>
            </div>
          </div>
          <div className={styles.rectangel}>
            <div>
              <p>All files are processed! Your widget is ready to go!</p>
              <div>
                <p>Try it out!</p>
              </div>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.tableheading}>
              <p>Name</p>
              <p>Upload Date & Time</p>
              <p>Status</p>
              <p>Action</p>
            </div>
            {tasks.map((e) => (
              <div className={styles.tableheading} key={e._id}>
                <p>{e.taskName}</p>
                <p>{moment(e.updatedAt).format("DD MMM YY | HH:mm")}</p>
                <p>Done</p>
                <div className={styles.buttons}>
                  <div
                    style={{ borderRight: "1px solid #D9D9D9" }}
                    onClick={() => handleClick(e)}
                  >
                    <p style={{ color: "#3C3C3C" }}>Edit</p>
                  </div>
                  <div onClick={() => handleDelete(e._id)}>
                    <p style={{ color: "#FF274C" }}>Delete</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {modal && (
            <UploadModal toggleModal={toggleModal} projectId={projectId} />
          )}
        </div>
      )}
    </>
  );
};
