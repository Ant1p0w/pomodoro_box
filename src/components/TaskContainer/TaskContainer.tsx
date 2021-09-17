import React from 'react';

export function TaskContainer() {
    return (
        <div className={'col-span-2'}>
            <div className={'bg-gray-100 pb-8'}>
                <div className={'py-4 px-10 mb-14 bg-gray-300 flex justify-between text-white'}>
                    <div>Сверстать сайт</div>
                    <div>Помидор 1</div>
                </div>
                <div className={'text-center mb-8'}>
                    <div className={'text-10xl font-extralight'}>25:00</div>
                    <div><span className={'text-gray-300'}>Задача 1</span> - Сверстать сайт</div>
                </div>
                <div className={'text-center flex flex gap-7 justify-center mb-8'}>
                    <button className={'bg-green py-4 px-12 text-white'}>Старт</button>
                    <button className={'py-4 px-12 text-gray-400 border-2'}>Стоп</button>
                </div>
            </div>
        </div>
    );
}
