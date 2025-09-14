/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Button from "./Button";
import Dataa from "./Dataa";
export const creatButton = createContext();
export const creatValue = createContext();
function Todo() {
  const navigate = useNavigate();
  let resultLocal = localStorage.getItem("data");
  const [listValue, SetListValue] = useState(
    resultLocal == localStorage.getItem("data") ? JSON.parse(resultLocal) : []
  );
  const [text, setText] = useState("");
  // const [ides, setIdes] = useState(0);
  let changeValueText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  let clickedAdding = useCallback(() => {
    if (text.trim() === "") return;
    SetListValue((prev) => [...prev, { id: Date.now(), values: text }]);
    setText("");
  }, [text]);

  let update = (id, newvalue) =>
    SetListValue((prev) =>
      prev.map((itme) =>
        itme.id === id ? { ...itme, values: newvalue } : itme
      )
    );

  let removeAll = useCallback(() => {
    return SetListValue(listValue.filter((itme) => itme.id !== itme.id));
  }, [listValue]); //  flase بيساوي بعضو فا دايما هيكون بي  itme.id هنا معناها }

  const SaveDataClicedAdding = useMemo(
    () => ({ fun: clickedAdding, removeAll: removeAll }),
    [clickedAdding, removeAll]
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(listValue));
  }, [listValue]);

  const SaveValue = useMemo(
    () => ({
      listValue: listValue,
      setText: setText,
      text: text,
      update: update,
      SetListValue: SetListValue,
    }),
    [listValue, text]
  );
  return (
    <>
      <div className="home-todo">
        <button className="Link-ToDO" onClick={() => navigate("/")}>
          go back to home
        </button>

        <div>
          <div className="input-butt">
            <input
              type="text"
              placeholder="todo"
              maxLength={8}
              value={text}
              onChange={changeValueText}
            />
            <creatButton.Provider value={SaveDataClicedAdding}>
              <Button />
            </creatButton.Provider>
          </div>
          <div>
            <creatValue.Provider value={SaveValue}>
              <Dataa />
            </creatValue.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
