import { useState } from "react";
import styles from "./Auth.module.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signup } from "../../features/user/userSlice";

export const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const [emptyFieldSignup, setEmptyFieldSignup] = useState(false);
  const [emptyFieldlogin, setEmptyFieldlogin] = useState(false);
  const { loading } = useSelector((state) => state.user);

  const handleSignup = () => {
    setEmptyFieldSignup(false);
    if (!name || !email) {
      setEmptyFieldSignup(true);
      return;
    }
    dispatch(signup({ name, email }));
  };

  const handleLogin = () => {
    setEmptyFieldlogin(false);
    if (!name || !email) {
      setEmptyFieldlogin(true);
      return;
    }
    dispatch(
      loginUser({
        name,
        email,
      })
    );
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab
              _selected={{
                fontSize: "3vh",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: "primary",
                borderBottomColor: "#7E22CE",
                borderBottomWidth: ".4vh",
              }}
              fontSize={"3vh"}
              fontFamily={"Roboto"}
              fontWeight={"400"}
              marginRight={"5.9vh"}
            >
              Login
            </Tab>
            <Tab
              _selected={{
                fontSize: "3vh",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: "primary",
                borderBottomColor: "#7E22CE",
                borderBottomWidth: ".4vh",
              }}
              fontSize={"3vh"}
              fontFamily={"Roboto"}
              fontWeight={"400"}
              marginRight={"5.9vh"}
            >
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className={styles.info}>
                {emptyFieldlogin && (
                  <p
                    style={{ textAlign: "center", color: "red" }}
                    className={styles.inputname}
                  >
                    Enter all Credentails
                  </p>
                )}
                {error && (
                  <p
                    style={{ textAlign: "center", color: "red" }}
                    className={styles.inputname}
                  >
                    Wromg Credentails
                  </p>
                )}
                <p className={styles.inputname}>Name</p>
                <Input
                  h={"6.0vh"}
                  fontSize={"2.0vh"}
                  focusBorderColor="primary"
                  marginBottom={"2vh"}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className={styles.inputname}>Email</p>
                <Input
                  h={"6vh"}
                  fontSize={"2vh"}
                  focusBorderColor="primary"
                  marginBottom={"2vh"}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className={styles.login} onClick={handleLogin}>
                  {loading ? <Spinner color="white" /> : <p>Login</p>}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.info}>
                {emptyFieldSignup && (
                  <p
                    style={{ textAlign: "center", color: "red" }}
                    className={styles.inputname}
                  >
                    Enter all Credentails
                  </p>
                )}
                {error && (
                  <p
                    style={{ textAlign: "center", color: "red" }}
                    className={styles.inputname}
                  >
                    Email Already Exist
                  </p>
                )}
                <p className={styles.inputname}>Name</p>
                <Input
                  h={"6.0vh"}
                  fontSize={"2.0vh"}
                  focusBorderColor="primary"
                  marginBottom={"2vh"}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
                <p className={styles.inputname}>Email</p>
                <Input
                  name="email"
                  h={"6.0vh"}
                  fontSize={"2.0vh"}
                  focusBorderColor="primary"
                  marginBottom={"2vh"}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className={styles.login} onClick={handleSignup}>
                  {loading ? <Spinner color="primary" /> : <p>Sign Up</p>}
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
