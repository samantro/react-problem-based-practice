import Task from "./Task";

export default function Tasks(props) {
  console.log(props);
  return (
    <div>
      {props.tasks.map((task) => {
        return <Task key={task.id} task={task} setTasks={props.setTasks} />;
      })}
    </div>
  );
}
