import styles from "./Navbar.module.css";
import home_icon from "/home-icon-primary.svg";
import down_arrow from "/down-arrow.svg";
import bell_icon from "/bell-icon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const params = useParams();
  const { projectName } = params;
  const { screen } = useSelector((state) => state.screen);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadcrump_left}>
        <img src={home_icon} onClick={handleClick} />
        <p style={{ color: "#999" }}>/ {projectName} /</p>
        <p className={styles.selected_tab}>
          {screen === "widget"
            ? "Widget Configurations"
            : screen === "upload"
            ? "Upload"
            : screen}
        </p>
      </div>
      <div className={styles.breadcrump_right}>
        <img src={down_arrow} />
        <p>EN</p>
        <div>
          <img src="/Flag.png" />
        </div>
        <img src={bell_icon} />
      </div>
    </div>
  );
};
