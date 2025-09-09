import React from 'react';
import cls from './button.module.scss';

export  function Button ({name, color}) {
    console.log(color, "color");

    return <button className={'${cls[color]}, ${cls.btn}'}>{name} </button>;
}

export  function Button1123123 ({name, color}) {
    console.log(color, "color");

    return <button className={'${cls[color]}, ${cls.btn}'}>{name} </button>;
}

