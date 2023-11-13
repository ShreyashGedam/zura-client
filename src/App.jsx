import { Home } from "./pages/Home";
import { Main } from "./pages/Main";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:projectName/:projectId" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
