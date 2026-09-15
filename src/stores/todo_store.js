import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const useTodoStore = create(persist(
  (set)=>({
    lists: [
      {
        id: 1,
        name: "Study",
        icon: "📚"
      },
      {
        id: 2,
        name: "Work",
        icon: "💼"
      }
    ],

    todos: [
      {
        id: 101,
        title: "Finish React course",
        completed: false,
        listId: 1
      },
      {
        id: 102,
        title: "Practice JavaScript",
        completed: true,
        listId: 1
      },
      {
        id: 103,
        title: "Finish project",
        completed: false,
        listId: 2
      }
    ],
    addTodo: (todo) => 
        set((state) => ({
            todos: [ ...state.todos, {id:  crypto.randomUUID(), ...todo}]
        })),
    addList: (list) =>
        set((state) => ({
            lists: [ ...state.lists, {id:  crypto.randomUUID(), ...list}]
        })),
    removeList: (listId) =>
    set((state) => ({
        lists: state.lists.filter((list) => list.id !== listId),
        todos: state.todos.filter((todo) => todo.listId !== listId),
        })),
    removeTodo: (todoId) =>
        set((state)=>({
            todos: state.todos.filter((todo)=> todo.id !== todoId)
        })),
    editTodo: (todo) => 
      set((state)=>({
        todos: state.todos.map((t)=>
          t.id === todo.id
            ? { ...t, title: todo.title }
            : t
        )
      })),
    completeTodo: (todoId) =>
      set((state)=>({
        todos: state.todos.map((t)=>(
          t.id === todoId
            ? { ...t, completed: !t.completed }
            : t
        ))
      }))
  }),{
    name: "todo-storage"
  })  
)