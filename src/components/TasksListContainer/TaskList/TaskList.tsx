import React from 'react';
import {useAppSelector} from '../../../hooks'
import {TTask} from "../../../features/tasks/tasksSlice";
import {TaskListItem} from "./TaskListItem";

export function TaskList() {
    const tasksList = useAppSelector(state => state.tasks.items);

    return (
        <ul className={'task-list mb-6 xl:pr-40'}>
            {tasksList.map((task: TTask) => (
                <TaskListItem task={task} key={task.uid}/>
            ))}
        </ul>
    );
}
