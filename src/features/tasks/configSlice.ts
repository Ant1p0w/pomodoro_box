import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../store";

export enum ETheme { light, dark }

interface IConfigState {
    pomodoroInMin: number,
    smallBreakTime: number,
    largeBreakTime: number,
    theme: ETheme.light
}

const initialConfigState: IConfigState = {
    pomodoroInMin: 25,
    smallBreakTime: 5,
    largeBreakTime: 30,
    theme: ETheme.light,
}

export const configSlice = createSlice({
    name: 'tasks',
    initialState: initialConfigState,
    reducers: {}
})

export const config = (state: RootState) => state.config

export default configSlice.reducer
