import React from 'react';

export default function Title({name, title, age}) {
    console.log(name, title, age);

    return <div>{title}</div>;
}