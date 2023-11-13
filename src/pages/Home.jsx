import styles from "./Home.module.css";
import logo from "/logo.svg";
import setting_icon from "/setting-icon.svg";
import bell_icon from "/bell-icon.svg";
import home_icon from "/home-icon.svg";
import { NoProject } from "../components/noproject/NoProject";
import { Projects } from "../components/projects/Projects";
import { Auth } from "../components/auth/Auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { getProjects } from "../features/project/projectSlice";
import { Spinner } from "@chakra-ui/react";

export const Home = () => {
  const logged = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.project);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (logged) {
      dispatch(setUser(logged));
      dispatch(getProjects(logged._id));
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo_box}>
        <div className={styles.left}>
          <img src={logo} />
          <p className={styles.logo_heading}>LAMA</p>
        </div>
        <div className={styles.icons}>
          <img src={setting_icon} />
          <img src={bell_icon} />
        </div>
      </div>
      <div className={styles.back_home}>
        <img src={home_icon} />
        <p>Back to Home</p>
      </div>
      {loading ? (
        <div className={styles.loading}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primary"
            size="xl"
          />
        </div>
      ) : projects.length ? (
        <Projects />
      ) : (
        <NoProject />
      )}
      {!user && <Auth />}
    </div>
  );
};
