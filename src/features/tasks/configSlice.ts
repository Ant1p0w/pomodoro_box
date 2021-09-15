import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../store";

interface IConfigState {
    pomodoroInMin: number
}

const initialConfigState: IConfigState = {
    pomodoroInMin: 25
}

export const configSlice = createSlice({
    name: 'tasks',
    initialState: initialConfigState,
    reducers: {}
})

export const config = (state: RootState) => state.config.pomodoroInMin

export default configSlice.reducer
