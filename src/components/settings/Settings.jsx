import { Input } from "@chakra-ui/react";
import styles from "./Settings.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../features/user/userSlice";
import { useToast } from '@chakra-ui/react'

export const Settings = () => {
  const [newName, setNewName] = useState("");
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const toast = useToast();

  const handleClick = () => {
    dispatch(changeName({ userId: user._id, name: newName }));
  };

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Account Settings</p>
      <div className={styles.main}>
        <img src="/Flag.png" alt="" />
        <div className={styles.inputdetails}>
          <p>User Name</p>
          <Input
            defaultValue={user.name}
            h={"6vh"}
            w={"49.3vh"}
            fontSize={"2vh"}
            focusBorderColor="primary"
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className={styles.inputdetails}>
          <p>Email</p>
          <Input
            defaultValue={user.email}
            h={"6vh"}
            w={"49.3vh"}
            fontSize={"2vh"}
            focusBorderColor="primary"
            isReadOnly
          />
        </div>
      </div>
      <div
        className={styles.savebutton}
        onClick={() => {
          handleClick();
          toast({
            title: "Name Changed",
            status: "success",
            duration: 1500,
            isClosable: true,
          });
        }}
      >
        <p>Save</p>
      </div>
      <p className={styles.heading} style={{ marginTop: "7.4vh" }}>
        Subscriptions
      </p>
      <div className={styles.upgradeplan}>
        <p className={styles.upgradetext}>
          You are currently on the <span>Ques AI Basic Plan!</span>
        </p>
        <div className={styles.upgradebutton}>
          <p>Upgrade</p>
        </div>
      </div>
      <p className={styles.cancle}>Cancel Subscription</p>
    </div>
  );
};
