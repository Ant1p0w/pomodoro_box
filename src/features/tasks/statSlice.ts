import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../store";
import moment from "moment";

export type TStatItem = {
    date: string,
    pomodoro_cnt: number,
    break_cnt: number,
    work_sec: number,
    pause_sec: number,
}

interface IStatState {
    items: TStatItem[]
}

const currentDateStateItem:TStatItem = {
    date: moment().format('YYYY-MM-DD'),
    pomodoro_cnt: 0,
    break_cnt: 0,
    work_sec: 0,
    pause_sec: 0,
}

const initialStatState: IStatState = {
    items: [currentDateStateItem]
}

export const statSlice = createSlice({
    name: 'stat',
    initialState: initialStatState,
    reducers: {
        increaseStatPomodoroCounter: (state, action: PayloadAction<string>) => {
            let date = action.payload;
            let findStatItem = state.items.find(statItem => statItem.date === date);

            if (findStatItem) {
                findStatItem.pomodoro_cnt++;
            }
        },
        increaseStatBreakCounter: (state, action: PayloadAction<string>) => {
            let date = action.payload;
            let findStatItem = state.items.find(statItem => statItem.date === date);

            if (findStatItem) {
                findStatItem.break_cnt++;
            }
        },
        increaseStatPauseSec: (state, action: PayloadAction<string>) => {
            let date = action.payload;
            let findStatItem = state.items.find(statItem => statItem.date === date);

            if (findStatItem) {
                findStatItem.pause_sec++;
            }
        },
        increaseStatWorkSec: (state, action: PayloadAction<string>) => {
            let date = action.payload;
            let findStatItem = state.items.find(statItem => statItem.date === date);

            if (findStatItem) {
                findStatItem.work_sec++;
            }
        },
    }
})

export const {increaseStatPomodoroCounter, increaseStatBreakCounter, increaseStatPauseSec, increaseStatWorkSec} = statSlice.actions

export const config = (state: RootState) => state.stat

export default statSlice.reducer
