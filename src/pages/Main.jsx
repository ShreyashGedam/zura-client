import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "../components/drawer/Drawer";
import { Navbar } from "../components/navbar/Navbar";
import { Widgit } from "../components/widgit/Widgit";
import { Settings } from "../components/settings/Settings";
import { ProjectScreen } from "../components/projectscreen/ProjectScreen";
import styles from "./Main.module.css";
import { useEffect } from "react";
import { getCurrent } from "../features/project/projectSlice";
import { useParams } from "react-router-dom";

export const Main = () => {
  const screen = useSelector((state) => state.screen.screen);
  const dispatch = useDispatch();
  const params = useParams();
  const { projectId } = params;

  useEffect(() => {
    dispatch(getCurrent(projectId));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Drawer />
      </div>
      <div className={styles.main}>
        <Navbar />
        {screen === "upload" && <ProjectScreen />}
        {screen === "widget" && <Widgit />}
        {screen === "settings" && <Settings />}
      </div>
    </div>
  );
};
