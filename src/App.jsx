import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./Comp/FirstPage";
import Todo from "./Comp/TodoS";
// import Lojic from "./Comp/Lojic";

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
