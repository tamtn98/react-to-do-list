import { Button, TextField } from "@mui/material";
import { useState } from "react";
// import { styled } from "styled-components";
import { styled } from "@mui/system";

const TodoList = () => {
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

  const StyledList = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  });

  const StyledItem = styled("div")({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "1rem",

    ".MuiTextField-root": {
      flex: 1,
    },

    ".MuiButton-root": {
      visibility: "hidden",
    },

    "&:hover .MuiButton-root": {
      visibility: "visible",
    }
  });

  return (
    <>
      <h1 className="inline-block">What do I need to do?</h1>

      <>
        {isTodosEmpty ? (
          <div>
            <i>Add something you might want, or need to work on.</i>
            <Button onClick={() => addNewItem()}>New</Button>
          </div>
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

export default TodoList;
