export default function Task(props) {
  const { task, setTasks } = props;
  const handleClick = () =>
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t,
      ),
    );

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{task.title}</h3>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? "✅ Completed" : "❌ Pending"}</p>
      <button onClick={() => handleClick()}>
        {task.completed ? "Mark Pending" : "Mark Complete"}
      </button>
    </div>
  );
}
