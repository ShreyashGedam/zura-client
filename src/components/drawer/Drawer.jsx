import { useState } from "react";
import styles from "./Drawer.module.css";
import icon from "/logo.svg";
import setting_icon from "/setting-icon.svg";
import setting_icon_white from "/setting-icon-white.svg";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../../features/drawer/drawerSlice";

export const Drawer = () => {
  const screen = useSelector((state) => state.screen.screen);
  const [selectedTab, setSelectedTab] = useState(screen);
  const dispatch = useDispatch();

  const handleClass = (name) => {
    setSelectedTab(name);
    if (name === "upload") {
      dispatch(
        setScreen({
          screen: "upload",
        })
      );
    } else if (name === "widget") {
      dispatch(
        setScreen({
          screen: "widget",
        })
      );
    } else if (name === "settings") {
      dispatch(
        setScreen({
          screen: "settings",
        })
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.icon}>
          <img src={icon} />
          <p>LAMA</p>
        </div>
        <p className={styles.section_header}>Podcast Upload Flow</p>
        <div className={styles.drawer_menu}>
          <div
            className={
              selectedTab === "upload"
                ? styles.selected_tab
                : styles.nonselected
            }
            onClick={() => handleClass("upload")}
          >
            <div>1</div>
            <p>Projects</p>
          </div>
          <div
            className={
              selectedTab === "widget"
                ? styles.selected_tab
                : styles.nonselected
            }
            onClick={() => handleClass("widget")}
          >
            <div>2</div>
            <p>Widget Configurations</p>
          </div>
          <div
            className={
              selectedTab === "deployment"
                ? styles.selected_tab
                : styles.nonselected
            }
            onClick={() => handleClass("deployment")}
          >
            <div>3</div>
            <p>Deployment</p>
          </div>
          <div
            className={
              selectedTab === "pricing"
                ? styles.selected_tab
                : styles.nonselected
            }
            onClick={() => handleClass("pricing")}
          >
            <div>4</div>
            <p>Pricing</p>
          </div>
          <div
            style={{
              position: "absolute",
              width: "94%",
              bottom: "0",
              marginBottom: "2.2vh",
            }}
            className={
              selectedTab === "settings"
                ? styles.selected_tab
                : styles.nonselected
            }
            onClick={() => handleClass("settings")}
          >
            <div>
              {selectedTab === "settings" ? (
                <img src={setting_icon_white} />
              ) : (
                <img src={setting_icon} />
              )}
            </div>
            <p>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};
