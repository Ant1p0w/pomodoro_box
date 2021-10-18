import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks";
import moment from "moment";
import 'moment/locale/ru';
import {TStatItem} from "../../features/tasks/statSlice";
import {StatPomodoro} from "./StatPomodoro";
import {StatDay} from "./StatDay";
import {StatStop} from "./StatStop";
import {StatPause} from "./StatPause";
import {StatFocus} from "./StatFocus";

moment.locale('ru');

const emptyStatDay: TStatItem = {
    date: moment().format('YYYY-MM-DD'),
    pomodoro_cnt: 0,
    stop_cnt: 0,
    work_sec: 0,
    pause_sec: 0,
}

export function StatContainer() {
    const statItems = useAppSelector(state => state.stat.items);
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
    const [statDay, setStatDay] = useState(emptyStatDay);
    const [selectedDayName, setSelectedDayName] = useState(moment().format('dddd'));

    useEffect(() => {
        setSelectedDayName(moment(selectedDate).format('dddd'));

        //Ищем день в статистике по дате
        let foundStatItem = statItems.find(item => item.date === selectedDate);

        //Применяем найденый день или ставим пустой
        if (foundStatItem) {
            setStatDay(foundStatItem);
        } else {
            setStatDay({
                date: selectedDate,
                pomodoro_cnt: 0,
                stop_cnt: 0,
                work_sec: 0,
                pause_sec: 0,
            });
        }

    }, [selectedDate]);

    return (
        <div>
            <div className={'flex justify-between items-center mb-8'}>
                <div className={'font-bold text-2xl leading-8 mb-2'}>Ваша активность</div>
                <div>
                    <select className={'py-4 px-5 bg-gray-100'}>
                        <option selected>Эта неделя</option>
                        <option>Прошедшая неделя</option>
                        <option>2 недели назад</option>
                    </select>
                </div>
            </div>
            <div className={'grid grid-cols-4 gap-8 mb-8'}>
                <StatDay selectedDayName={selectedDayName} workInSec={statDay.work_sec}/>
                <div className={'col-span-3 row-span-3 bg-gray-100 p-6'}>
                    3
                </div>
                <StatPomodoro pomodoroCnt={statDay.pomodoro_cnt}/>
            </div>
            <div className={'grid grid-cols-3 gap-8'}>
                <StatFocus  pauseSec={statDay.pause_sec} workInSec={statDay.work_sec}/>
                <StatPause pauseSec={statDay.pause_sec}/>
                <StatStop stopCnt={statDay.stop_cnt}/>
            </div>
        </div>
    );
}
