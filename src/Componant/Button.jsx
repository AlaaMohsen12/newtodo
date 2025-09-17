import React, { useContext } from "react";
import { creatButton } from "./Todo";
function Button() {
  console.log("go");
  const { fun, removeAll } = useContext(creatButton);
  return (
    <>
      <button
        className="add"
        onClick={() => {
          fun();
        }}
      >
        add
      </button>
      <button className="remove-all" onClick={removeAll}>
        remove all
      </button>
    </>
  );
}

export default React.memo(Button);
