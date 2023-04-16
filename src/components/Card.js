import React from 'react'
import CarbData from '../CarbData.js'
import '../index.css'

export default function Card(props){

    const data = CarbData.data;

    //TODO: add nutrition content to card. Maybe hide when button is clicked

    return(
        <div className="parentCard">
           <div className="card">
                 <h3>{data[props.recipeIndex].title}</h3>
                 <p>{data[props.recipeIndex].directions}</p>
             </div>
        </div>
    )
}
