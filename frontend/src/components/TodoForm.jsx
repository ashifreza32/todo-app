import { useState } from "react";
import { createTodo } from "../services/todoService";

function TodoForm() {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Task =", task);

    if (!task.trim()) return;

    try {
      const response = await createTodo({
        task: task,
      });

      console.log(response.data);

      setTask("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;