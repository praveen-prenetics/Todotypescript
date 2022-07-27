import React from "react";
import { ITask } from "./Interface";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <input type="checkbox" className="chk" name="task" />
                <p className='complete'>{task.taskName}</p>
                <i onClick={() => {
                    completeTask(task.taskName)
                }} className="fa fa-trash-o" />

            </div>

        </div>
        // <div className="box-container">
        //     <div className='task'>
        //         <div id="arrow">
        //             <input type="checkbox" className="chk" name="task" />
        //             <p className='complete'onClick={() => {
        //             completeTask(task.taskName)
        //         }} />
        //         </div>
        //         <button className="remove"><i className="fa fa-trash-o"></i></button>
        //     </div>
        // </div>

    );
};

export default TodoTask;