import React from 'react'
import CarbData from '../CarbData.js'
import '../index.css'

export default function Navbar(){

    //TODO: clicking one of these will bring up its card info

    const buttonNames = CarbData.data.map(item=>{
        return(<button key={item.id}>{item.title}</button>)
    })

    return(
        <div className="tab">
            {buttonNames}
        </div>
    )
}