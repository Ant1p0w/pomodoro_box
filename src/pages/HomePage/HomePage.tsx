import React from 'react';
import {Layout} from "../../components/Layout";
import {TasksListContainer} from "../../components/TasksListContainer";
import {TaskContainer} from "../../components/TaskContainer";

export function HomePage() {
    return (
        <Layout>
            <div className={'grid xl:grid-cols-3 gap-4'}>
                <TasksListContainer/>
                <TaskContainer/>
            </div>
        </Layout>
    );
}
