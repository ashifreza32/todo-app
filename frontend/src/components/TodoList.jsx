function TodoList({ todos }) {
    
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          {todo.task}
        </div>
      ))}
    </div>
  );
}

export default TodoList;

