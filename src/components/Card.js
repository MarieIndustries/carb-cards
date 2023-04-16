import React from 'react'
import CarbData from '../CarbData.js'
import '../index.css'

export default function Card(props){

    const data = CarbData.data;

    //TODO: add nutrition content to card. Maybe hide when button is clicked
    const directionsArray = data[props.recipeIndex].directions.split('\n')
    var directionsRows = [];
    directionsArray.forEach(instruction => directionsRows.push(<div>{instruction}</div>))

    return(
        <div className="parentCard">
           <div className="card">
                 <h3>{data[props.recipeIndex].title}</h3>
                 {directionsRows}
             </div>
        </div>
    )
}
