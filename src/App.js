import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menu";
import { Route, Routes } from "react-router-dom";
import RedPage from "./Pages/RedPage";
import BluePage from "./Pages/BluePage";

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </div>
  );
}

export default App;
