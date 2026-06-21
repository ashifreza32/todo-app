import {useState} from '../state';

function TodoForm() {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
         setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                />

            <button type="submit">
                Add Task</button>
        </form>

            

    )
}
export default TodoForm;