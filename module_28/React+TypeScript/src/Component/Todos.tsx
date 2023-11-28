import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todos";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-contex";


const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {

  const Todoctx =useContext(TOdo)

  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
