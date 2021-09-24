import React, {useState} from 'react';
import {useAppSelector} from '../../../hooks'
import {TTask} from "../../../features/tasks/tasksSlice";
import {TaskListItem} from "./TaskListItem";

export function TaskList() {
    const tasksList = useAppSelector(state => state.tasks.items);
    const [isMenuShownId, setIsMenuShownId] = useState('');

    const showMenu = (uid: string) => {
        if(uid === isMenuShownId){
            setIsMenuShownId('');
        }else{
            setIsMenuShownId(uid);
        }
    }

    return (
        <ul className={'task-list mb-6 xl:pr-40'}>
            {tasksList.map((task: TTask) => (
                <TaskListItem task={task} key={task.uid} isMenuShownId={isMenuShownId} handleShowMenu={showMenu}/>
            ))}
        </ul>
    );
}
