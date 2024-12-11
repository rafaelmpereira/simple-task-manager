import "./App.css";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      description: "Estudar mais e mais",
      estimate: "30 min",
      finished: false,
    },
    {
      id: 2,
      title: "Descansar",
      description: "Manter corpo e mente equilibrados é importante",
      estimate: "15 min",
      finished: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, finished: !task.finished };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-700 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>
        <div className="text-slate-100 font-bold text-center space-y-4">
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          />
          <AddTask />
          <h1>To-do: excluídos</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
