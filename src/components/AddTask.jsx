import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Insert the task name"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Insert the task description"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        className="bg-slate-500 px-4 py-4 rounded-md font-medium"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Please, fill in the blanks.");
          }
          onAddTaskSubmit(title, description);
          setTitle = "";
          setDescription = "";
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
