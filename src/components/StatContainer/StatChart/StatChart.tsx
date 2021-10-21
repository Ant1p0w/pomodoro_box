import React from 'react';

type StatChartProps = {
    selectedDate: string,
    changeSelectedDate: (selectedDate: string) => void
}

export function StatChart({selectedDate, changeSelectedDate}: StatChartProps) {
    const weekdays = [
        {
            name: 'Пн',
            active: false,
            height: 365,
        },
        {
            name: 'Вт',
            active: false,
            height: 0,
        },
        {
            name: 'Ср',
            active: false,
            height: 100,
        },
        {
            name: 'Чт',
            active: true,
            height: 150,
        },
        {
            name: 'Пт',
            active: false,
            height: 50,
        },
        {
            name: 'Сб',
            active: false,
            height: 30,
        },
        {
            name: 'Вс',
            active: false,
            height: 10,
        },
    ];

    return (
        <div className={'col-span-3 row-span-3 bg-gray-100'}>
            <div className={'pt-20 mr-32'}>
                <div className={'relative mb-20 bg-gray-400 h-px'}>
                    <div
                        className={'absolute left-full whitespace-nowrap transform -translate-y-2/4 pl-8 text-xs text-gray-500'}>1
                        ч 40 мин
                    </div>
                </div>
                <div className={'relative mb-20 bg-gray-400 h-px'}>
                    <div
                        className={'absolute left-full whitespace-nowrap transform -translate-y-2/4 pl-8 text-xs text-gray-500'}>1
                        ч 40 мин
                    </div>
                </div>
                <div className={'relative mb-20 bg-gray-400 h-px'}>
                    <div
                        className={'absolute left-full whitespace-nowrap transform -translate-y-2/4 pl-8 text-xs text-gray-500'}>1
                        ч 40 мин
                    </div>
                </div>
                <div className={'relative mb-20 bg-gray-400 h-px'}>
                    <div
                        className={'absolute left-full whitespace-nowrap transform -translate-y-2/4 pl-8 text-xs text-gray-500'}>1
                        ч 40 мин
                    </div>
                </div>
            </div>
            <div className={'flex bg-gray-200 text-2xl leading-8 text-gray-300 py-2 px-16'}>
                {weekdays.map(item => {
                    let className = 'absolute w-full bottom-full mb-2 left-0';

                    if(item.active){
                        className += item.height ? ' bg-red-500' : ' bg-gray-500';
                    }else{
                        className += item.height ? ' bg-red-300 cursor-pointer' : ' bg-gray-400';
                    }

                    if(item.height === 0){
                        item.height = 5;
                    }
                    return (
                        <div className={'relative px-6 mx-4'}>
                            {item.name}
                            <div className={className}
                                 style={{height: item.height + 'px'}}></div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
