import React from 'react'

import './card-item.css'

export const Card = (props) =>{
    return(
        <div className='card-item'>
        <img alt='moster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
        </div>
    )
}