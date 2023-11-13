import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "../features/drawer/drawerSlice";
import userReducer from "../features/user/userSlice";
import projectReducer from "../features/project/projectSlice";
import subprojectReducer from "../features/subprojects/subprojectSlice";

export const store = configureStore({
  reducer: {
    screen: drawerReducer,
    user: userReducer,
    project: projectReducer,
    subproject: subprojectReducer,
  },
});
