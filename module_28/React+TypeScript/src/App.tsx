import "./App.css";
import NewTodo from "./Component/NewTodo";
import Todos from "./Component/Todos";
import { TodosContextProvider } from "./store/todos-contex";

function App() {
  return (
    <>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </>
  );
}

export default App;
