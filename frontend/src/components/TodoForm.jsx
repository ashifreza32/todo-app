import {state} from '../state';

function TodoForm() {
    const [task, setTask] = state.useState('');

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(task);
         setTask('');
    };

    return (
        <form onSubmit={handleSumbit}>
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