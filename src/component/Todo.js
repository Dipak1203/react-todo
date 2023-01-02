import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import TodoList from "./TodoList";
import "./style.css";

/*
? Create By DIPAK KUMAL
! Don't Copy just look up and redesign

*/
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [add, setAdd] = useState([]);

  const submitItem = (e) => {
    setTodo(e.target.value);
  };

  const submitAdd = () => {
    setAdd((oldData) => {
      return [...oldData, todo];
    });
    setTodo("");
  };
  // ? For Delete

const dltItem = (id) =>{
    setAdd((oldData) =>{
        return oldData.filter((ele,index) =>{
            return index !== id;
        });
    });
}
  return (
    <Container>
      <Box>
        <h2>Write Anything You Want</h2>
        <div>
          <input
            type="text"
            placeholder="Enter Text....."
            name="todo"
            onChange={submitItem}
            value={todo}
          />
          <Tooltip title="Add Item">
            <Button variant="contained" onClick={submitAdd}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
        <ul>
          {add.map((ele, index) => {
            return (
              <TodoList
                id={index}
                item={ele}
                key={index}
                dltItem={dltItem}
              />
            );
          })}
        </ul>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Box = styled.div`
  width: 400px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;
  }
  div input {
    outline: none;
    border: 1px solid #1976d2;
    text-align: center;
    width: 50%;
    border-radius: 5px;
    gap: 30px;
  }
`;

export default Todo;
