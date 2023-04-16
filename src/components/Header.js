import React from 'react'
import '../index.css'
import bowl from '../images/steamy-bowl.png'

export default function Header(){
    return(
        <div className="header">
            <img src={bowl} alt="" className="header-img" />
            <h1 className="header--title">Carb Cards</h1>
            <h4 className="header--subtitle">What are you cooking tonight?</h4>
        </div>
    )
}