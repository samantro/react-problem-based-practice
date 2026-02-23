import { useState, useMemo } from "react";
import Tasks from "./components/Tasks";
import InputTask from "./components/InputTask";
import Filter from "./components/Filter";
import Sorting from "./components/Sorting";

function App() {
  const initialTasks = [
    { id: 1, title: "Learn React", priority: "High", completed: false },
    { id: 2, title: "Go to Gym", priority: "Medium", completed: false },
    { id: 3, title: "Read Book", priority: "Low", completed: true },
    { id: 4, title: "Build Project", priority: "High", completed: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("None");

  // ✅ Derived value (no useEffect needed)
  const visibleTasks = useMemo(() => {
    let result = [...tasks];

    // Filter logic
    if (filter === "COMPLETED") {
      result = result.filter((task) => task.completed);
    }

    if (filter === "PENDING") {
      result = result.filter((task) => !task.completed);
    }

    if (filter === "HIGH_PRIORITY") {
      result = result.filter((task) => task.priority === "High");
    }

    // Sorting logic
    if (sortBy === "PRIORITY") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      result.sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
      );
    }

    if (sortBy === "TITLE") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [tasks, filter, sortBy]);

  return (
    <div>
      <h1>Smart Task Manager</h1>

      <Filter setFilter={setFilter} />
      <Sorting setSortBy={setSortBy} />

      <Tasks tasks={visibleTasks} setTasks={setTasks} />

      <InputTask setTasks={setTasks} />
    </div>
  );
}

export default App;
