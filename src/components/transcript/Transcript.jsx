import { useState } from "react";
import styles from "./Transcript.module.css";
import { Textarea } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { editTask } from "../../features/subprojects/subprojectSlice";

export const Transcript = (props) => {
  const { data, setEdit } = props;
  const dispatch = useDispatch();
  const initialText = data.description;
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");

  const handleFocus = () => {
    setShow(true);
  };

  const handleClick = () => {
    dispatch(editTask({ taskId: data.taskId, description: description }));
    setEdit(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <p className={styles.upload}>Edit Transcript</p>
        {show && (
          <div className={styles.button} onClick={() => setEdit(false)}>
            <div style={{ border: ".2vh solid #FF274C" }}>
              <p>Discard</p>
            </div>
            <div
              style={{ background: "#211935", color: "#F8F8F8" }}
              onClick={handleClick}
            >
              <p>Save & Exit</p>
            </div>
          </div>
        )}
      </div>
      <Textarea
        defaultValue={initialText}
        focusBorderColor="primary"
        borderColor="primary"
        _hover={{ borderColor: "primary" }}
        fontSize={"3vh"}
        resize="none"
        h={"74.8vh"}
        onFocus={handleFocus}
        marginBottom={"20.7vh"}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
