import React, { FormEvent } from "react";
import classes from "./NewTodo.module.css";
import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-contex";

const NewTodo: React.FC = () => {
  const newCtx = useContext(TodosContext);

  const toolTextInputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = toolTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    newCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input ref={toolTextInputRef} type="text" id="text" />
      <button>Add to Todos</button>
    </form>
  );
};

export default NewTodo;
