import React from 'react';
import {Layout} from "../../components/Layout";
import {TasksList} from "../../components/TasksList";

export function HomePage() {
    return (
        <Layout>
            <div className={'grid grid-cols-3 gap-4'}>
               <TasksList/>
            </div>
            <div className={'col-span-2'}>

            </div>
        </Layout>
    );
}
