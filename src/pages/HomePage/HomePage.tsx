import React from 'react';
import {Layout} from "../../components/Layout";
import {TasksListContainer} from "../../components/TasksListContainer";

export function HomePage() {
    return (
        <Layout>
            <div className={'grid grid-cols-3 gap-4'}>
               <TasksListContainer/>
            </div>
            <div className={'col-span-2'}>

            </div>
        </Layout>
    );
}
