import React from 'react'
import CarbData from '../CarbData.js'
import '../index.css'

export default function Footer(){

    //maybe import the data and create buttons for each that will bring up the recipe
    const buttonNames = CarbData.data.map(item=>{
        return(<button >{item.title}</button>)
    })
    return(
        
        <div className="tab">
            {buttonNames}
        </div>
    )
}