import React, {MouseEventHandler, Ref, useEffect, useRef, useState} from 'react';
import {TTask} from "../../../../features/tasks/tasksSlice";
import {TaskMenu} from "../../TaskMenu";

interface ITaskListItem {
    task: TTask,
    isMenuShownId: string,
    handleShowMenu: (uid: string) => void
}

export function TaskListItem({task, isMenuShownId, handleShowMenu}: ITaskListItem) {
    return (
        <li className={'task-list-item border-b py-5 px-1.5 flex items-center'}>
            <div className={'border rounded-full lh-1 px-4 py-2 mr-5'}>
                {task.pomodoro_cnt}
            </div>
            <div>
                {task.name}
            </div>
            <div className={'ml-auto relative'}>
                <button onClick={() => {handleShowMenu(task.uid)}} className={'py-2'}>
                    <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#C4C4C4"/>
                        <circle cx="13" cy="3" r="3" fill="#C4C4C4"/>
                        <circle cx="23" cy="3" r="3" fill="#C4C4C4"/>
                    </svg>
                </button>
                <TaskMenu isOpen={isMenuShownId === task.uid} taskUid={task.uid}/>
            </div>
        </li>
    );
}
