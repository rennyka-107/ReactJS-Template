import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TODO_ACTION } from "../../Redux/Action";
import { GetTodoSelector } from "../../Redux/Selector";
import { removeAuth } from "../../Utils/localStorage";

const Home = () => {
  const dispatch = useDispatch();
  const todoSelector = GetTodoSelector();
  const { todoList } = todoSelector;
  console.log(todoSelector);
  useEffect(() => {
    dispatch(TODO_ACTION.GET_TO_DO());
  },[]);
  const logOut = () => {
    removeAuth();
    window.location.reload();
  };

  return (
    <div>
      <ul>
        {!isEmpty(todoList) &&
          todoList.map((td, idx) => <li key={idx}>{td.title}</li>)}
      </ul>
      Home
      <button onClick={logOut}>Log out!</button>
    </div>
  );
};

export default Home;
