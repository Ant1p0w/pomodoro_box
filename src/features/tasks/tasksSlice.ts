import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../store";

export type TTask = {
    uid: string,
    name: string,
    pomodoro_cnt: number
}

interface ITasksState {
    items: TTask[]
}

const initialTasksState: ITasksState = {
    items: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    reducers: {
        add: (state, action: PayloadAction<TTask>) => {
            state.items.push(action.payload);
        },
    }
})

export const {add} = tasksSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const tasks = (state: RootState) => state.tasks.items

export default tasksSlice.reducer
