import ButtonAddRemove from "./buttonAddRemove";
import React, { useContext, createContext } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const buttonResult = createContext();

import { creatValue } from "./Todo";
import { useState } from "react";
function Dataa() {
  const { all, setText, text, update, SetListValue } = useContext(creatValue);
  let styles = {
    backgroundColor: "rgb(163, 163, 163)",
    pointerEvents: "none",
    cursor: "auto",
  };
  const [dataPrS, setPrse] = useState({});
  const [dataPrSs, setPrses] = useState(styles);

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

  let remove = (id) => SetListValue(all.filter((itme) => itme.id !== id)); // هنا معناها ال مش بتساويه هتهولي وال بتساويه شيلو

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
        {all.map((e) => {
          let objectDataButton = {
            dataPrS: dataPrS,
            dataPrSs: dataPrSs,
            edit: edit,
            save: save,
            remove: remove,
            e: e,
          };

          return (
            <div className="home-resulats" key={e.id}>
              <h3 className="resultData">{e.values}</h3>
              <div className="Removing-edit">
                <buttonResult.Provider value={objectDataButton}>
                  <ButtonAddRemove />
                </buttonResult.Provider>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default React.memo(Dataa);

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

// {
//   /* <button
//                   className="edit"
//                   style={dataPrS[e.id]}
//                   onClick={() => {
//                     edit(e.values, e.id);
//                   }}
//                 >
//                   edit
//                 </button> */
// }

// {
//   /* <button
//                   className="save"
//                   style={dataPrSs[e.id] || dataPrSs}
//                   onClick={() => {
//                     save(e.id);
//                     console.log(e.id);
//                   }}
//                 >
//                   save
//                 </button> */
// }
// {
//   /* <button className="remove" onClick={() => remove(e.id)}>
//                   remove
//                 </button> */
// }
