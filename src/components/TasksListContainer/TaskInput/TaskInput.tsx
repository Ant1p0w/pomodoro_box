import React, {useState} from 'react';
import {add, TTask} from '../../../features/tasks/tasksSlice'
import {useAppDispatch, useAppSelector} from '../../../hooks'
import {generateGuid} from "../../../helpers/generateUuid";

export function TaskInput() {
    const dispatch = useAppDispatch()
    const [taskName, setTaskName] = useState('');
    const pomodoroInMin = useAppSelector(state => state.config.pomodoroInMin);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskName(event.target.value);
    }

    function addNewTask(){
        dispatch(add({uid: generateGuid(), name: taskName, pomodoro_cnt: 1, time_left: pomodoroInMin}));
        setTaskName('');
    }

    return (
        <div className={'mb-6'}>
            <div className={'mb-6'}>
                <input value={taskName} onChange={handleChange} className={'w-80 bg-gray-100 py-4 px-5'}
                       placeholder="Название задачи" required/>
            </div>
            <button onClick={addNewTask} className={'bg-green py-4 px-12 text-white'}>Добавить
            </button>
        </div>
    );
}
