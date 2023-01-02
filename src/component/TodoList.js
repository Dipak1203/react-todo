import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
const TodoList = ({ id, item, dltItem }) => {
  return (
    <Wrapper>
      <li>{item}</li>
      <Tooltip title="Delete item">
        <Button
          variant="contained"
          className="btn"
          onClick={() => dltItem(id)}
        >
          <DeleteIcon />
        </Button>
      </Tooltip>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  li {
    list-style: none;
    background: #1976d2;
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    border: none;
    border-radius: 4px;
    color: #fff;
  }
  .btn {
    background: red;
  }
`;
export default TodoList;
