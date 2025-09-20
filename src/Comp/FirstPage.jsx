import { useNavigate } from "react-router-dom";

function FirstPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <button className="Link-ToDO" onClick={() => navigate("/todo")}>
          Go to Todo List
        </button>
      </div>
    </>
  );
}

export default FirstPage;
