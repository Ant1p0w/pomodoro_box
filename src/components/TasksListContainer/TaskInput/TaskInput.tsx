import React, {useState} from 'react';
import {addTask} from '../../../features/tasks/tasksSlice'
import {useAppDispatch, useAppSelector} from '../../../hooks'
import {generateGuid} from "../../../helpers/generateUuid";

export function TaskInput() {
    const dispatch = useAppDispatch()
    const [taskName, setTaskName] = useState('');
    const pomodoroInMin = useAppSelector(state => state.config.pomodoroInMin);

    const defaultTask = {
        uid: generateGuid(),
        name: taskName,
        pomodoro_cnt: 1,
        time_left: pomodoroInMin,
        is_edit: false
    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskName(event.target.value);
    }

    function addNewTask() {
        dispatch(addTask(defaultTask));
        setTaskName('');
    }

    return (
        <div className={'mb-6'}>
            <div className={'mb-6'}>
                <input value={taskName} onChange={handleChange} className={'w-80 bg-gray-100 py-4 px-5'}
                       placeholder="Название задачи" required/>
            </div>
            <button onClick={addNewTask} className={'bg-green hover:bg-darkgreen py-4 px-12 text-white'}>Добавить
            </button>
        </div>
    );
}
