import { useState } from "react";
import { useTodoStore } from "../stores/todo_store";

export default function CollectionForm({contentChanger}) {
  const {addList} = useTodoStore();
  const icons = ["📝", "💼", "📚", "🏠", "💡", "🎯", "🛒", "💻"];
  const [name, setName] = useState('')
  const [selectedIcon, setSelectedIcon] = useState('')
  
  function handleSetName(event){
    setName(event.target.value)
  }

  function handleSelectIcon(selectedIcon){
    setSelectedIcon(selectedIcon)
  }

  function handleCreateList(){
    const newList = {
      name,
      icon: selectedIcon,
    };

    addList(newList); 
    contentChanger('main')
    
  }

  return (
    <div className="card bg-base-100 shadow-md p-6">
      <h2 className="text-3xl font-bold mb-4">
        Create a New List
      </h2>

      {/* Name */}
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text font-medium">
            List Name
          </span>
        </div>

        <input
          type="text"
          value={name}
          onChange={(event)=>handleSetName(event)}
          placeholder="e.g. Study, Work, Shopping..."
          className="input input-bordered w-full"
        />
      </label>

      {/* Icons */}
      <div className="mt-5">
        <p className="font-medium mb-3">
          Choose an icon
        </p>

        <div className="flex flex-wrap gap-2">
          {icons.map((icon) => (
            <button
              type="button"
              key={icon}
              onClick={()=>handleSelectIcon(icon)}
              className={`btn btn-square text-xl ${icon == selectedIcon? 'btn-primary':''} `}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        disabled={name == '' || selectedIcon == ''}
        onClick={handleCreateList}
        className="btn btn-primary mt-6"
      >
        Create List
      </button>
    </div>
  );
}