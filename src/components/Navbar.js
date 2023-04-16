import React from 'react'
import CarbData from '../CarbData.js'
import '../index.css'

export default function Navbar(props){

    //TODO: clicking one of these will bring up its card info

    //selectedElement
    //
    // props.

    const buttonNames = CarbData.data.map(item=>{
        return(<button key={item.id} onClick={() => props.handleClick(item.title)} >{item.title}</button>)
    })

    return(
        <div className="tab">
            {buttonNames}
        </div>
    )
}