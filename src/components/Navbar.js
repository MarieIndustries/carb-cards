import React from 'react'
import CarbData from '../CarbData.js'
import '../index.css'

export default function Navbar(props){

    const buttonNames = CarbData.data.map(item=>{
        return(<button key={item.id} onClick={() => props.handleClick(item.title)} >{item.title}</button>)
    })

    return(
        <div className="tab">
            {buttonNames}
        </div>
    )
}