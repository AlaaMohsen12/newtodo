import FeachData from "./FeachData";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import Lojic from "./Lojic";
import { useNavigate } from "react-router-dom";
function Todo() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-todo">
        <div>
          <button className="Link-ToDO" onClick={() => navigate("/")}>
            Go to home
          </button>
        </div>
        <div>
          <Lojic>
            <Inputs />
            <FeachData />
            <Buttons />
          </Lojic>
        </div>
      </div>
    </>
  );
}

export default Todo;
