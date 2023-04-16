import React from 'react'
import CarbData from '../CarbData.js'
import '../index.css'

export default function Card(props){

    const data = CarbData.data;

    //todo: add fancy font https://fonts.google.com/specimen/Andika?query=Andika+

    const directionsArray = data[props.recipeIndex].directions.split('\n')
    var directionsRows = [];
    directionsRows.push(<div>Cooking Instructions:</div>)
    directionsArray.forEach(instruction => directionsRows.push(<div>{instruction}</div>))

    const showMacros = props.showMacros;
    const nutrition = data[props.recipeIndex].nutrition;
    function NutritionDisplay(){
        return(
            <div>
                <div>Nutrition Information Per 100g</div>
                <table className="nutritionTable">
                    <tr>
                        <th>Calories</th>
                        <th>Carbs</th>
                        <th>Protein</th>
                        <th>Fat</th>
                        <th>Fiber</th>
                    </tr>
                    <tr>
                        <td>{nutrition.calories}</td>
                        <td>{nutrition.macros.carbs}</td>
                        <td>{nutrition.macros.protein}</td>
                        <td>{nutrition.macros.fat}</td>
                        <td>{nutrition.fiber}</td>
                    </tr>
                </table>
            </div>
        )
    } 
    
    return(
        <div className="parentCard">
           <div className="card">
                 <h3 className="cardTitle">{data[props.recipeIndex].title}</h3>
                 {directionsRows}
                 <br />
                 <button onClick={props.handleShowMacros}>Toggle Nutrition Information</button>
                 {showMacros && <div>{NutritionDisplay()}</div>}  
             </div>
        </div>
    )
}
