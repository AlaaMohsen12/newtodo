import React, { useContext } from "react";
import { creatValue } from "./Todo";
import { useState } from "react";
function Dataa() {
  const { listValue, setText, text, update, SetListValue } =
    useContext(creatValue);

  let styles = {
    backgroundColor: "rgb(163, 163, 163)",
    pointerEvents: "none",
    cursor: "auto",
  };
  const [dataPrS, setPrse] = useState({});
  const [dataPrSs, setPrses] = useState(styles);

  // const [styleEdit, setStyleEdit] = useState({});
  // const [styleSave, setStyleSave] = useState({});

  let edit = (value, id) => {
    setText(value);
    setPrse({
      [id]: styles,
    });
    setPrses({ [id]: {} });
  };

  let save = (id) => {
    if (text === "") return;
    update(id, text);
    setText("");
    setPrses({
      [id]: styles,
    });
    setPrse({ [id]: {} });
  };

  // let changeSave = (id) => {
  //   setPrse((prev) => {
  //     prev.map((itmes) => {
  //       return itmes.id == id
  //         ? { ...itmes, style: { color: "red" } }
  //         : { ...itmes, style: {} };
  //     });
  //   });
  // };

  // let changeEadit = (id) => {
  //   setPrse((prev) => {
  //     prev.map((itmes) => {
  //       return itmes.id == id
  //         ? { ...itmes, style: { color: "green" } }
  //         : { ...itmes, style: {} };
  //     });
  //   });
  // };

  let remove = (id) => SetListValue(listValue.filter((itme) => itme.id !== id)); // هنا معناها ال مش بتساويه هتهولي وال بتساويه شيلو

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {listValue.map((e) => (
          <div className="home-resulats" key={e.id}>
            <h3 className="resultData">{e.values}</h3>
            <div className="Removing-edit">
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
                  console.log(e.id);
                }}
              >
                save
              </button>
              <button className="remove" onClick={() => remove(e.id)}>
                remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default React.memo(Dataa);
