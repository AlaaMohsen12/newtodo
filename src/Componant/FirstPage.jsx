import React from "react";
import { useNavigate } from "react-router-dom";
function FirstPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <button className="Link-ToDO" onClick={() => navigate("/todo")}>
          go to todo list
        </button>
      </div>
    </>
  );
}

export default FirstPage;
