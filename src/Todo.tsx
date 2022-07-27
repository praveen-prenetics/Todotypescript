import { ITask } from './Interface';
import React, { ChangeEvent, useState } from 'react';
import TodoTask from './TodoTask';


function Todo() {

    const [task, setTask] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);


    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {

        if (event.target.name === "task") {
            setTask(event.target.value)
        }
    };



    const addTask = (): void => {
        const newTask = { taskName: task };
        setTodoList([...todoList, newTask])
        setTask("");

    }
    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName !== taskNameToDelete
        }))
    };

    const logOut = () => {
        localStorage.removeItem('userdetail');
        localStorage.removeItem('token');
        window.location.href = '/';
    };
    return (
        <form className="container">
            <div className="head">
                <div className='menu'><p id='top'>Todos</p></div>
                <div className="logbtn" id='out' onClick={logOut}>Logout</div>
            </div>
            <div className="outtop">
                <div className="out">
                    <div id="tname"><strong>All Tasks</strong></div>
                    <div id="center">
                        <input type="text" id="textbox" placeholder="Add a new task"  name="task" value={task} required
                            onChange={handleChange} />
                        <button id="button" onClick={addTask} >Add</button>
                    </div>
                    <div className='detail'>
                        {todoList.map((task: ITask) => {
                            return <TodoTask task={task} completeTask={completeTask} />
                        }
                        )}
                    </div>
                    <div id="quotes">
                        {/* {todos.length === 0 && <label>Seems like a quiet day</label>} */}
                    </div>
                </div>
            </div>
        </form>



    );
}

export default Todo;
