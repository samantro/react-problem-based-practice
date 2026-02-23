import React from "react";

const InputTask = ({ setTasks }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    const formData = new FormData(e.target);

    const newTask = {
      id: Date.now(),
      title: formData.get("taskName"),
      priority: formData.get("priority"),
      completed: false,
    };

    console.log(newTask);

    // update state (single source of truth)
    setTasks((prev) => [...prev, newTask]);

    e.target.reset(); // clear form
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          New Task :
          <input type="text" name="taskName" required />
        </label>

        <label>
          Priority :
          <select name="priority">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTask;
