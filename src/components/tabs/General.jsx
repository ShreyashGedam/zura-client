import styles from "./General.module.css";
import { Input } from "@chakra-ui/react";

export const General = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p className={styles.heading}>Chatbot Name</p>
        <Input
          h={"6vh"}
          fontSize={"2vh"}
          focusBorderColor="primary"
          border={"1px solid #999"}
          borderRadius={".9vh"}
        />
        <p className={styles.helpertext}>
          Lorem ipsuim dolor sit Lorem ipsuim dolor sit
        </p>
      </div>
      <div className={styles.main}>
        <p className={styles.heading}>Welcome Message</p>
        <Input
          h={"6vh"}
          fontSize={"2vh"}
          focusBorderColor="primary"
          border={"1px solid #999"}
          borderRadius={".9vh"}
        />
        <p className={styles.helpertext}>
          Lorem ipsuim dolor sit Lorem ipsuim dolor sit
        </p>
      </div>
      <div className={styles.main}>
        <p className={styles.heading}>Input Placeholder</p>
        <Input
          h={"6vh"}
          fontSize={"2vh"}
          focusBorderColor="primary"
          border={"1px solid #999"}
          borderRadius={".9px"}
          onChange={(e) => handleChange(e.target.value)}
        />
        <p className={styles.helpertext}>
          Lorem ipsuim dolor sit Lorem ipsuim dolor sit
        </p>
      </div>
    </div>
  );
};
