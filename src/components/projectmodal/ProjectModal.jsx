import { Input } from "@chakra-ui/react";
import styles from "./ProjectModal.module.css";
import { useState } from "react";
import { chakra } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../../features/project/projectSlice";

export const ProjectModal = (props) => {
  const { toggleModal } = props;
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleChange = (val) => {
    setName(val);
  };

  const handleClick = () => {
    if (!name) return;
    dispatch(addProject({ userId: user._id, name: name }));
    toggleModal();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.conatiner}>
        <div className={styles.main}>
          <p>Create Project</p>
          <p>Enter Project name:</p>
          <Input
            placeholder="Type here"
            h={"6vh"}
            fontSize={"2vh"}
            focusBorderColor="primary"
            marginBottom={"1vh"}
            onChange={(e) => handleChange(e.target.value)}
          />
          {name === "" ? (
            <p className={styles.error}>Project Name Can't be empty</p>
          ) : null}
          <div className={styles.button}>
            <chakra.button
              px="10"
              py="3"
              color="red"
              rounded="md"
              borderRadius={"1vh"}
              fontSize={"2.2vh"}
              fontWeight={600}
              marginRight={"2vh"}
              onClick={toggleModal}
            >
              Cancel
            </chakra.button>
            <chakra.button
              px="10"
              py="3"
              bg="primary"
              color="white"
              rounded="md"
              borderRadius={"1vh"}
              fontSize={"2.2vh"}
              fontWeight={600}
              onClick={handleClick}
            >
              Create
            </chakra.button>
          </div>
        </div>
      </div>
    </div>
  );
};
