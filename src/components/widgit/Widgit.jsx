import { Display } from "../tabs/Display";
import { General } from "../tabs/General";
import styles from "./Widgit.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export const Widgit = () => {
  return (
    <div className={styles.container}>
      <p className={styles.upload}>Configuration</p>
      <div className={styles.tabs}>
        <Tabs>
          <TabList borderBottomWidth={"4px"}>
            <Tab
              _selected={{
                fontSize: "3.0vh",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: "primary",
                borderBlockColor: "#7E22CE",
                borderBottomWidth: ".8vh",
              }}
              fontSize={"3.0vh"}
              fontFamily={"Roboto"}
              fontWeight={"400"}
              marginRight={"5.9vh"}
            >
              General
            </Tab>
            <Tab
              _selected={{
                fontSize: "3.0vh",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: "primary",
                borderBlockColor: "#7E22CE",
                borderBottomWidth: ".8vh",
              }}
              fontSize={"3.0vh"}
              fontFamily={"Roboto"}
              fontWeight={"400"}
              marginRight={"5.9vh"}
            >
              Display
            </Tab>
            <Tab
              _selected={{
                fontSize: "3.0vh",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: "primary",
                borderBlockColor: "#7E22CE",
                borderBottomWidth: ".8vh",
              }}
              fontSize={"3.0vh"}
              fontFamily={"Roboto"}
              fontWeight={"400"}
            >
              Advanced
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <General />
            </TabPanel>
            <TabPanel>
              <Display />
            </TabPanel>
            <TabPanel>
              <p>Advanced!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
