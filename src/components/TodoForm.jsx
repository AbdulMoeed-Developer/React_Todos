import { useState } from "react"
import { useTodoStore } from "../stores/todo_store";

export default function TodoForm({selectedListId}){
  const {addTodo} = useTodoStore();
  const [todo, setTodo] = useState('');
  function handleChangeTodo(event){
    setTodo(event.target.value);
  }

  function handleCreateTodo(){
    const newTodo = {
      title: todo,
      completed: false,
      listId: selectedListId
    }

    console.log(newTodo);
    addTodo(newTodo)
    setTodo('')
  }

  return (
    <div className="flex gap-3 mt-8">
      <input
        onChange={handleChangeTodo}
        value={todo}
        type="text"
        placeholder="Enter a todo..."
        className="input input-bordered flex-1"
      />

      <button className="btn btn-primary" onClick={handleCreateTodo} disabled={todo == ''}>
        Add Todo
      </button>
    </div>
  )
}