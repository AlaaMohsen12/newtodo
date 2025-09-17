import React, { useContext } from "react";
import { buttonResult } from "./Dataa";

function ButtonAddRemove() {
  const { e, dataPrS, dataPrSs, edit, save, remove } = useContext(buttonResult);
  return (
    <>
      <button
        className="edit"
        style={dataPrS[e.id]}
        onClick={() => {
          edit(e.values, e.id);
          
        }}
      >
        edit
      </button>

      <button
        className="save"
        style={dataPrSs[e.id] || dataPrSs}
        onClick={() => {
          save(e.id);
        }}
      >
        save
      </button>

      <button className="remove" onClick={() => remove(e.id)}>
        remove
      </button>
    </>
  );
}

export default React.memo(ButtonAddRemove);
