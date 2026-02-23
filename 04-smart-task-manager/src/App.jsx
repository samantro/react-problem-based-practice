import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const initialTasks = [
    { id: 1, title: "Learn React", priority: "High", completed: false },
    { id: 2, title: "Go to Gym", priority: "Medium", completed: false },
    { id: 3, title: "Read Book", priority: "Low", completed: true },
    { id: 4, title: "Build Project", priority: "High", completed: false },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div>
      <h1>Smart Task Manager</h1>
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
