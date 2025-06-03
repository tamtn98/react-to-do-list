import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(-1);

  const isTodosEmpty = todos.length === 0;

  const addNewItem = () => {
    const newIdx = todos.length;
    const newItem = {
      id: newIdx,
      value: "",
    };
    setTodos([...todos, newItem]);
    setIsEdit(newIdx);
  };

  const setItem = (id: number, newObj) => {
    setTodos((todos) =>
      todos.map((item) => (item.id === id ? { ...item, ...newObj } : item))
    );
  };

  const removeItem = (id: number) => {
    setTodos((todos) => todos.filter((item) => item.id !== id));
    setIsEdit(-1);
  };

  const StyledBlock = styled.div``;
  const StyledInlineBlock = styled.div`
    display: inline-block;
  `;

  const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  const StyledItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    .MuiTextField-root {
      flex: 1;
    }

    .MuiButton-root {
      visibility: hidden;
    }

    &:hover .MuiButton-root {
      visibility: visible;
    }
  `;

  const StyledDebug = styled.p.attrs((props) => ({
    className: props.className,
  }))`
    color: red;
  `;

  return (
    <>
      <StyledInlineBlock>
        <h1>What do I need to do?</h1>
      </StyledInlineBlock>

      <StyledDebug className="hidden">current isEdit: {isEdit}</StyledDebug>

      <>
        {isTodosEmpty ? (
          <StyledBlock>
            <i>Add something you might want, or need to work on.</i>
            <Button onClick={() => addNewItem()}>New</Button>
          </StyledBlock>
        ) : (
          <>
            <Button onClick={() => addNewItem()}>New task</Button>
            <StyledList>
              {todos
                .map(({ id, value }) => (
                  <StyledItem>
                    <TextField
                      size="small"
                      autoFocus={isEdit === id}
                      required={true}
                      key={id}
                      variant={"outlined"}
                      value={value}
                      onFocusCapture={(e) => {
                        console.log("onFocusCapture event", e);
                        setIsEdit(id);
                      }}
                      onChange={(e) => setItem(id, { value: e.target.value })}
                      onBlurCapture={(e) => setIsEdit(-1)}
                    />
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => removeItem(id)}
                    >
                      Remove
                    </Button>
                  </StyledItem>
                ))
                .reverse()}
            </StyledList>
          </>
        )}
      </>
    </>
  );
};

export default App;
