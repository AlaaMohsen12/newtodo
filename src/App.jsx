import "./App.css";
import FirstPage from "./Componant/FirstPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./Componant/Todo";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
