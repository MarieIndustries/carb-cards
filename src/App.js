import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Navbar from './components/Navbar'
import CarbData from './CarbData'
import './index.css'

function App() {
  const [currentRecipe, setCurrentRecipe] = React.useState(randomRecipeIndex())
  const [showMacros, setShowMacros] = React.useState(true)

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

  function selectSpecificRecipe(elementName){
      const currentlySelectedElement  = CarbData.data.filter(item=> item.title === elementName);
      setCurrentRecipe(currentlySelectedElement[0].id-1)
  }

  function handleShowMacros(cardMacros){
      setShowMacros(prevState => !prevState)
  }

  return (
    <div className="App">
        <Header />
        <Card recipeIndex={currentRecipe} showMacros={showMacros} handleShowMacros={handleShowMacros}/>
        {newRecipeButton()}
        <Navbar handleClick={selectSpecificRecipe}  />
    </div>
  );
}

export default App;
