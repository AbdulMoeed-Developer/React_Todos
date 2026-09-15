import { useState } from "react";
import { useTodoStore } from "../stores/todo_store";

export default function TodoItem({ todo }) {
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [startEdit, setStartEdit] = useState(false);

  const { editTodo, completeTodo, removeTodo } = useTodoStore();

  function handleTodoChange(event) {
    setTodoTitle(event.target.value);
  }

  function handleStartEdit(){
    setStartEdit(true)
  }

  function handleEdit() {
    setStartEdit(false)
    editTodo({
      id: todo.id,
      title: todoTitle,
    });
  }

  return (
    <div
      key={todo.id}
      className="flex items-center justify-between bg-base-100 p-4 rounded-xl shadow-sm"
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
          className="checkbox checkbox-primary"
        />
        {startEdit?
            <input
            onChange={handleTodoChange}
            value={todoTitle}
            className="input input-warning"
            type="text"
            />
            :
            todo.title
        }
        
      </div>

      <div className="flex gap-2">
        {startEdit?
            <button className="btn btn-sm btn-ghost" onClick={handleEdit}> Save </button>
            :
            <button className="btn btn-sm btn-ghost" onClick={handleStartEdit} > Edit </button>
        }


        <button
          className="btn btn-sm btn-error"
          onClick={() => removeTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}