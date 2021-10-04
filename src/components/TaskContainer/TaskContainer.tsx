import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import classNames from "classnames";
import {deleteTask, finishPomodoro} from "../../features/tasks/tasksSlice";

interface TControlButton {
    name: string,
    onClick: () => void,
    disabled: boolean
}

export function TaskContainer() {
    const tasksList = useAppSelector(state => state.tasks.items);
    const pomodoroInMin = useAppSelector(state => state.config.pomodoroInMin);
    const breaksCounter = useAppSelector(state => state.breaks.breakCounter);

    const [task, setTask] = useState(tasksList[0]);
    const [currentPomodoro, setCurrentPomodoro] = useState(task.pomodoro_finished + 1);
    const [timerInSeconds, setTimerInSeconds] = useState(pomodoroInMin * 60);
    const [isPaused, setIsPaused] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    const dispatch = useAppDispatch();

    //Первая задача из списка
    useEffect(() => {
        setTask(tasksList[0]);
    }, [tasksList]);

    //Таймер
    useEffect(() => {
        let timerId = setInterval(() => {

            //Если запущен таймер
            if(isStarted && !isPaused && timerInSeconds > 0){
                setTimerInSeconds(timerInSeconds - 1);
            }

            //Если время закончиоось
            if(isStarted && timerInSeconds === 0){
                handleComplete();
            }
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [isStarted, isPaused, timerInSeconds]);

    function handleStart() {
        setIsStarted(true);
    }

    function handleStop() {
        setIsStarted(false);
        setTimerInSeconds(pomodoroInMin * 60);
    }

    function handlePause() {
        setIsPaused(true);
    }

    function handleResume() {
        setIsPaused(false);
    }

    function handleComplete() {

        //Сбрасываем таймер
        setIsPaused(false);
        setIsStarted(false);
        setTimerInSeconds(pomodoroInMin * 60);

        //Если задача из нескольких помидорок
        if(currentPomodoro === task.pomodoro_cnt){
            dispatch(finishPomodoro(task.uid));
            dispatch(deleteTask(task.uid));
        }else{
            dispatch(finishPomodoro(task.uid));
            setCurrentPomodoro(currentPomodoro + 1);
        }
    }

    function showControlButtons() {
        let firstButton: TControlButton = {
            name: 'Старт',
            onClick: handleStart,
            disabled: false,
        }

        let secondButton: TControlButton = {
            name: 'Стоп',
            onClick: handleStop,
            disabled: true,
        }

        if (isPaused) {
            firstButton = {
                name: 'Продолжить',
                onClick: handleResume,
                disabled: false,
            }

            secondButton = {
                name: 'Сделано',
                onClick: handleComplete,
                disabled: false,
            }
        } else if (isStarted) {
            firstButton = {
                name: 'Пауза',
                onClick: handlePause,
                disabled: false,
            }

            secondButton = {
                name: 'Стоп',
                onClick: handleStop,
                disabled: false,
            }
        }

        return (
            <div className={'text-center flex flex gap-7 justify-center mb-8'}>
                <button className={'bg-green hover:bg-darkgreen py-4 px-12 text-white'}
                        onClick={firstButton.onClick}
                        disabled={firstButton.disabled}>
                    {firstButton.name}
                </button>
                <button className={'py-4 px-12 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white'}
                        onClick={secondButton.onClick}
                        disabled={secondButton.disabled}>
                    {secondButton.name}
                </button>
            </div>
        )
    }

    function getFormattedTimer(){
        let minutes = parseInt(String(timerInSeconds / 60));
        let seconds = timerInSeconds % 60;

        let strSeconds = seconds < 10 ? '0' + seconds : '' + seconds
        let strMinutes = minutes < 10 ? '0' + minutes : '' + minutes

        return strMinutes + ':' + strSeconds
    }

    //Классы стилей
    const headClasses = classNames(
        'py-4 px-10 mb-14 flex justify-between text-white',
        {
            'bg-gray-300': !isStarted,
            'bg-red-500': isStarted,
        },
    );

    const textCounterClasses = classNames(
        'text-10xl font-extralight',
        {
            'text-red-500': isStarted,
        },
    );

    return (
        <div className={'col-span-2'}>
            <div className={'bg-gray-100 pb-8'}>
                <div className={headClasses}>
                    <div>{task.name}</div>
                    <div>Помидор {currentPomodoro}</div>
                </div>
                <div className={'text-center mb-8'}>
                    <div className={textCounterClasses}>{getFormattedTimer()}</div>
                    <div>
                        <span className={'text-gray-300'}>Задача 1</span>
                        <span> -</span>
                        <span>{task.name}</span>
                    </div>
                </div>
                {showControlButtons()}
            </div>
        </div>
    );
}
