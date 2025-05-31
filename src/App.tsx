import { useState } from "react";
import { MyButton } from "./components/common";

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(-1);

  const addNewItem = () => {
    const newIdx = todos.length + 1;
    const newItem = {
      id: newIdx,
      value: "new item",
    };
    setTodos([...todos, newItem]);
    setIsEdit(newIdx);
  };

  return (
    <>
      <h1>What do I need to do?</h1>

      <>
        {todos.length === 0 ? (
          <i>Add something you might want, or need to work on.</i>
        ) : (
          todos.map(({ id, value }) =>
            id === isEdit ? <textarea>{value}</textarea> : <p>{value}</p>
          )
        )}
      </>

      <MyButton onClick={() => addNewItem()}>New task</MyButton>
    </>
  );
};

export default App;
