import { usevalueTodo } from "./Lojic";
import Buttons from "./Buttons";
function FeachData() {
  const { list, edit, update, text, remove, color, ColorUpdate, styles } =
    usevalueTodo();
  return (
    <>
      <div>
        {list.map((e) => (
          <div className="" key={e.two}>
            <div className="home-resulats">
              <div className="resultData"> {e.one}</div>
              <div>
                <Buttons>
                  <div className="Removing-edit">
                    <button
                      className="edit"
                      style={color[e.two]}
                      onClick={() => {
                        edit(e.one, e.two);
                      }}
                    >
                      edit
                    </button>
                    <button
                      className="save"
                      style={ColorUpdate[e.two] || styles}
                      onClick={() => update(e.two, text)}
                    >
                      save
                    </button>
                    <button className="remove" onClick={() => remove(e.two)}>
                      remove
                    </button>
                  </div>
                </Buttons>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeachData;
