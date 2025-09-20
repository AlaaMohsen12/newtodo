/* eslint-disable react-hooks/rules-of-hooks */
import { useState, createContext, useContext, useEffect } from "react";
const todoContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const usevalueTodo = () => useContext(todoContext);
function Lojic({ children }) {
  const [list, setlist] = useState(() => {
    const val = localStorage.getItem("key");
    return val ? JSON.parse(val) : [];
  });

  let styles = {
    backgroundColor: "rgb(163, 163, 163)",
    pointerEvents: "none",
    cursor: "auto",
  };
  const [text, setText] = useState("");
  const [color, setColor] = useState({});
  const [ColorUpdate, setColorUpdate] = useState(styles);
  const [ColorUpdateAdd, setColorUpdateAdd] = useState({});

  let changed = (e) => {
    return setText(e.target.value);
  };

  let Add = () => {
    setlist([...list, { one: text, two: Date.now() }]);
    setColorUpdateAdd({});
  };

  let edit = (val, id) => {
    setText(val);
    setColor({ [id]: styles });
    setColorUpdate({ [id]: {} });
    setColorUpdateAdd(styles);
  };

  let update = (id, newValue) => {
    text.trim() === ""
      ? ""
      : setlist((prev) =>
          prev.map((e) => (e.two === id ? { ...e, one: newValue } : e))
        );
    setColorUpdate({ [id]: styles });
    setColor({ [id]: {} });
    setColorUpdateAdd({});
    setText("");
  };

  let removingAll = () => {
    setlist([]);
  };

  let remove = (id) => {
    setlist((prev) =>
      prev.filter((value) => {
        return value.two !== id;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <todoContext.Provider
        value={{
          list,
          Add,
          text,
          setText,
          edit,
          changed,
          update,
          removingAll,
          remove,
          color,
          ColorUpdate,
          ColorUpdateAdd,
          styles,
        }}
      >
        <div>{children}</div>
      </todoContext.Provider>
    </>
  );
}

export default Lojic;
