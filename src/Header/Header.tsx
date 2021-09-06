import React from 'react';
import LogoIcon from '../assets/svg/logo.svg'

export function Header() {
    return (
        <header  className={'mb-32 px-5 py-5 shadow-xl flex items-center'}>
            <div>
                <img src={LogoIcon} className={'mr-5'}/>
            </div>
            <div className={'text-xl text-red-500'}>
                pomodoro_box
            </div>
        </header>
    );
}
