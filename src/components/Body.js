import React from 'react'
import CarbData from '../CarbData.js'

export default function BodyContent(){

    const [showContent, setShowContent] = React.useState(false)

    function displayOnClick() {
        setShowContent(prevState=> !prevState)
    }
    
    function BodyData() {
        return (
            <div>
                <button onClick={displayOnClick}>Click Me</button>
                { showContent ? <HiddenThing /> : null}
            </div>
        )
    }

    
    function HiddenThing(){ 
        const data = CarbData.data;
        
        return (
            <div className="tabcontent">
                <h3>{data[3].title}</h3>
                <p>{data[3].directions}</p>
            </div>
        )
        
    }


    const carbCacheData = CarbData.data.map(item=> {
        return (
            <div className="tabcontent">
                <h3>{item.title}</h3>
                <p>{item.directions}</p>
            </div>
        )
    })

    return(
        <div>
            {BodyData()}
            <div>{carbCacheData}</div>
        </div>
    )
}