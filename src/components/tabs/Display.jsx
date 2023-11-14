import { useState } from "react";
import styles from "./Display.module.css";
import { Switch, Select, Input, Spinner } from "@chakra-ui/react";
import upload from "/upload.svg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { botIcon } from "../../features/subprojects/subprojectSlice";

export const Display = () => {
  const [color, setColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const params = useParams();
  const dispatch = useDispatch();
  const { projectId } = params;
  const { tasks, loading } = useSelector((state) => state.subproject);
  const imgUrl = tasks[0]?.projectId?.botImage;

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    dispatch(botIcon({ projectId: projectId, image: selectedFile }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <div>
          <p className={styles.heading}>Primary Color</p>
          <div className={styles.colorbox}>
            <Input
              h={"6vh"}
              fontSize={"2vh"}
              focusBorderColor="primary"
              border={"1px solid #999"}
              borderRadius={"0.9vh"}
              onChange={(e) => setColor(e.target.value)}
              minW={"51vh"}
            />
            <div style={{ background: `${color}` }}></div>
          </div>
          <p className={styles.helpertext}>
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
        <div>
          <p className={styles.heading}>Font Color</p>
          <div className={styles.colorbox}>
            <Input
              h={"6vh"}
              fontSize={"2vh"}
              focusBorderColor="primary"
              border={"1px solid #999"}
              borderRadius={"0.9vh"}
              onChange={(e) => setFontColor(e.target.value)}
              minW={"51vh"}
            />
            <div style={{ background: `${fontColor}` }}></div>
          </div>
          <p className={styles.helpertext}>
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
      </div>
      <div className={styles.inputs} style={{ marginTop: "3.5vh" }}>
        <div>
          <p className={styles.heading}>Font Size (in px)</p>
          <div className={styles.colorbox}>
            <Input
              h={"6vh"}
              fontSize={"2vh"}
              focusBorderColor="primary"
              border={"1px solid #999"}
              borderRadius={"0.9vh"}
              minW={"59.3vh"}
            />
          </div>
          <p className={styles.helpertext}>
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
        <div>
          <p className={styles.heading}>Chat Height (in % of total screen)</p>
          <div className={styles.colorbox}>
            <Input
              h={"6vh"}
              fontSize={"2vh"}
              focusBorderColor="primary"
              border={"1px solid #999"}
              borderRadius={"0.9vh"}
              minW={"59.3vh"}
            />
          </div>
          <p className={styles.helpertext}>
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
      </div>
      <div className={styles.show}>
        <div>
          <p className={styles.heading}>Show Sources</p>
          <p className={styles.helpertext}>
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
        <Switch size="lg" />
      </div>
      <div className={styles.divider}></div>
      <p className={styles.chatheading}>Chat Icon</p>
      <div className={styles.inputs} style={{ marginTop: "35px" }}>
        <div>
          <p className={styles.heading}>Font Size (in px)</p>
          <Select
            placeholder="Small (48x48 px)"
            minW={"56.9vh"}
            height={"6.1vh"}
            marginTop={"16px"}
            focusBorderColor="primary"
            fontSize={"2.28vh"}
          >
            <option value="option1">Medium (48x48 px)</option>
            <option value="option2">Large (48x48 px)</option>
            <option value="option3">Extra Large (48x48 px)</option>
          </Select>
          <p className={styles.helpertext}>
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
        <div>
          <p className={styles.heading}>Position on Screen</p>
          <Select
            placeholder="Bottom Right"
            minW={"56.9vh"}
            height={"6.1vh"}
            marginTop={"16px"}
            focusBorderColor="primary"
            fontSize={"2.28vh"}
          >
            <option value="option1">Bottom Left</option>
            <option value="option2">Top Right</option>
            <option value="option3">Top Left</option>
          </Select>
          <p className={styles.helpertext}>
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
      </div>
      <div className={styles.inputs} style={{ marginTop: "35px" }}>
        <div>
          <p className={styles.heading}>Distance from Bottom (in px)</p>
          <div className={styles.colorbox}>
            <Input
              h={"6vh"}
              fontSize={"2vh"}
              focusBorderColor="primary"
              border={"1px solid #999"}
              borderRadius={"0.9vh"}
              minW={"59.3vh"}
            />
          </div>
          <p className={styles.helpertext}>
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
        <div>
          <p className={styles.heading}>Horizontal Distance (in px)</p>
          <div className={styles.colorbox}>
            <Input
              h={"6vh"}
              fontSize={"2vh"}
              focusBorderColor="primary"
              border={"1px solid #999"}
              borderRadius={"0.9vh"}
              minW={"59.3vh"}
            />
          </div>
          <p className={styles.helpertext}>
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
      </div>
      <div className={styles.bot}>
        <p>Bot Icon</p>
        <div>
          {imgUrl ? (
            <img className={styles.urlImage} src={imgUrl} />
          ) : (
            <div className={styles.botimage}></div>
          )}
          {loading ? (
            <div>
              <div
                className={styles.uploadbutton}
                style={{ justifyContent: "center" }}
              >
                <Spinner size="md" color="white" />
              </div>
              <p className={styles.bothelper}>Recommended Size: 48x48px</p>
            </div>
          ) : (
            <>
              <input
                type="file"
                style={{ display: "none" }}
                id="fileInput"
                onChange={handleChange}
              />
              <label htmlFor="fileInput" onChange={handleChange}>
                <div>
                  <div className={styles.uploadbutton}>
                    <p>Upload Image</p>
                    <img src={upload} alt="" />
                  </div>
                  <p className={styles.bothelper}>Recommended Size: 48x48px</p>
                </div>
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
