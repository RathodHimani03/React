import React, { useState, createContext } from "react";
import Todo from "../models/todos";

type TodosObject = {
  items: Todo[];
  addTodo: (id:string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const onRemoveHandle = ({id}:{id:string}) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const contextValue:TodosObject = {
    items: todos,
    addTodo: onAddTodo,
    removeTodo: onRemoveHandle,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
