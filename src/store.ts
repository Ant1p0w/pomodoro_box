import {configureStore} from '@reduxjs/toolkit'
import tasksReducer from "./features/tasks/tasksSlice"
import configReducer from "./features/tasks/configSlice"

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        config: configReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
