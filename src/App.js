import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Navbar from './components/Navbar'
import CarbData from './CarbData'
import './index.css'

function App() {
  const [currentRecipe, setCurrentRecipe] = React.useState(randomRecipeIndex())


  function randomRecipeIndex(){
    return Math.floor(Math.random() * CarbData.data.length)
  }

  function newRecipeButton(){
    return(
      <div className="randomizeRecipeButton">
        <button onClick={() => randomRecipe()}>Give me another recipe!</button>
      </div>
    )
  }

  function randomRecipe(){
    const newRandomRecipeIndex = randomRecipeIndex();
    setCurrentRecipe(prevIndex => {
      return newRandomRecipeIndex === prevIndex ? randomRecipeIndex() : newRandomRecipeIndex;
    })
  }

  return (
    <div className="App">
        <Header />
        <Card recipeIndex={currentRecipe}/>
        {newRecipeButton()}
        <Navbar />
    </div>
  );
}

export default App;
