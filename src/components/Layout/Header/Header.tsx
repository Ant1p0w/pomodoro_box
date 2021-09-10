import React from 'react';
import LogoIcon from '../../../assets/svg/logo.svg'

export function Header() {
    return (
        <header className={'mb-32 px-5 py-5 shadow-xl flex items-center justify-between'}>
            <div className={'flex items-center'}>
                <div>
                    <img src={LogoIcon} className={'mr-5'}/>
                </div>
                <div className={'text-xl text-red-500'}>
                    pomodoro_box
                </div>
            </div>
            <div className={'flex items-center'}>
                <svg className={'mr-1.5'} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill="#DC3E22"/>
                </svg>
                <span className={'text-red-500'}>
                    Статистика
                </span>
            </div>
        </header>
    );
}
