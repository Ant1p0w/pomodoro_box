import React from 'react';

export function StatContainer() {
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
        </div>
    );
}
