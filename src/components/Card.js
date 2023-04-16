import React from 'react'
import CarbData from '../CarbData.js'
import '../index.css'

export default function Card(props){

    const data = CarbData.data;

    //TODO: format nutrition information into table
    
    const directionsArray = data[props.recipeIndex].directions.split('\n')
    var directionsRows = [];
    directionsArray.forEach(instruction => directionsRows.push(<div>{instruction}</div>))

    const showMacros = props.showMacros;
    const nutrition = data[props.recipeIndex].nutrition;
    function NutritionDisplay(){
        return(
            <div>
                <div>Nutrition Information Per 100g</div>
                <div>Calories: {nutrition.calories}</div>
                <div>Carbs: {nutrition.macros.carbs}</div>
                <div>Protein: {nutrition.macros.protein}</div>
                <div>Fat: {nutrition.macros.fat}</div>
                <div>Fiber: {nutrition.fiber}</div>
            </div>
        )
    } 
    

    return(
        <div className="parentCard">
           <div className="card">
                 <h3>{data[props.recipeIndex].title}</h3>
                 {directionsRows}
                 <button onClick={props.handleShowMacros}>Toggle Nutrition Information</button>
                {showMacros && <div>{NutritionDisplay()}</div>}  
             </div>
        </div>
    )
}
