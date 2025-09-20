import { usevalueTodo } from "./Lojic";
function Inputs() {
  const { Add, text, setText, changed, removingAll, ColorUpdateAdd } =
    usevalueTodo();
  return (
    <>
      <div className="input-butt">
        <input
          type="text"
          value={text}
          maxLength={11}
          placeholder="todo"
          onChange={changed}
        />
        <button
          className="add"
          style={ColorUpdateAdd}
          onClick={() => {
            if (text.trim() === "") return;
            Add();
            setText("");
          }}
        >
          add
        </button>
        <button className="remove-all" onClick={() => removingAll()}>
          remove all
        </button>
      </div>
    </>
  );
}

export default Inputs;
