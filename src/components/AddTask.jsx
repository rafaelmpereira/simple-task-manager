function AddTask() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Insert the task name"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <input
        type="text"
        placeholder="Insert the task description"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <button className="bg-slate-500 px-4 py-4 rounded-md font-medium">
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
