import React from 'react';

import './card-list.css';

import {Card} from '../card-item/card-item-component'

export const CardList = (props) => {
    return(
    <div className='card-list'>
    {props.monsters.map(monster=>(
        <Card key={monster.id} monster={monster}/>
       ))}
    </div>
    );
}