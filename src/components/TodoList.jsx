import { useState } from "react";
import { useTodoStore } from "../stores/todo_store";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList({contentChanger}) {
  const { lists, todos, removeList } = useTodoStore();

  const [selectedList, setSelectedList] = useState(0);

  function handleSelectList(id) {
    setSelectedList(id);
  }

  const list = lists.find((l) => l.id === selectedList);

  const listTodos = todos.filter(
    (todo) => todo.listId === selectedList
  );

  return (
    <div className="mt-8">

      {/* Lists Section */}
      <div className="flex w-full flex-col">
        <div className="divider uppercase font-bold">
          All Lists
        </div>
      </div>

      {/* ============================= */}
      {/* NO LISTS CREATED */}
      {/* ============================= */}

      {lists.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16 px-6">

          <div className="text-6xl mb-5">
            📝
          </div>

          <h2 className="text-3xl font-bold mb-3">
            No Lists Yet
          </h2>

          <p className="text-base-content/60 max-w-md mb-6">
            You haven't created any lists yet. Create your first list
            to start organizing your tasks.
          </p>

          <button
            className="btn btn-primary"
            onClick={() => { contentChanger("collectionForm") }}
          >
            ➕ Create Your First List
          </button>

        </div>
      ) : (
        <>
          {/* ============================= */}
          {/* LIST BUTTONS */}
          {/* ============================= */}

          <div className="flex flex-row flex-wrap gap-3">

            {lists.map((l) => (
              <div className="filter" key={l.id}>

                <button
                  className={`btn ${
                    selectedList === l.id
                      ? "btn-primary"
                      : ""
                  }`}
                  onClick={() => handleSelectList(l.id)}
                >
                  {l.icon} {l.name}
                </button>

              </div>
            ))}

            {/* Clear Selection */}
            {selectedList !== 0 && (
              <button
                className="btn btn-square"
                type="button"
                onClick={() => handleSelectList(0)}
              >
                ✕
              </button>
            )}

          </div>

          {/* ============================= */}
          {/* SELECTED LIST SECTION */}
          {/* ============================= */}

          <div className="flex w-full flex-col">
            <div className="divider divider-primary uppercase font-bold">
              Selected List
            </div>
          </div>

          {/* ============================= */}
          {/* NO LIST SELECTED */}
          {/* ============================= */}

          {selectedList === 0 && (
            <div className="flex flex-col items-center justify-center text-center py-14 px-6">

              <div className="text-5xl mb-4">
                👆
              </div>

              <h2 className="text-2xl font-bold mb-2">
                Select a List
              </h2>

              <p className="text-base-content/60">
                Choose a list above to view and manage your tasks.
              </p>

            </div>
          )}

          {/* ============================= */}
          {/* SELECTED LIST */}
          {/* ============================= */}

          {list && (
            <>
              {/* Collection Header */}
              <div className="flex justify-between items-center mb-5">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                    {list.icon}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      {list.name}
                    </h2>

                    <p className="text-sm text-base-content/60">
                      {listTodos.length}{" "}
                      {listTodos.length === 1 ? "task" : "tasks"}
                    </p>
                  </div>

                </div>

                <button
                  className="btn btn-sm btn-accent"
                  onClick={() => {
                    removeList(list.id);
                    setSelectedList(0);
                  }}
                >
                  Delete
                </button>

              </div>

              {/* ============================= */}
              {/* NO TODOS */}
              {/* ============================= */}

              {listTodos.length === 0 && (
                <div className="alert mb-4">
                  <span>📋</span>

                  <div>
                    <h3 className="font-bold">
                      No tasks yet
                    </h3>

                    <p className="text-sm">
                      Add your first task below to get started.
                    </p>
                  </div>
                </div>
              )}

              {/* ============================= */}
              {/* TODOS */}
              {/* ============================= */}

              <div className="space-y-3">

                {listTodos.map((todoItem) => (
                  <TodoItem
                    key={todoItem.id}
                    todo={todoItem}
                  />
                ))}

                <TodoForm
                  selectedListId={selectedList}
                />

              </div>
            </>
          )}
        </>
      )}

    </div>
  );
}