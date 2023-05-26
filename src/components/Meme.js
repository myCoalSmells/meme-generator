import React from "react"
import memesData from "../memesData"

function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return(
        <main className="meme">
            <div className="forms">
                <input type="text" className="forms--input" placeholder="Top text"/>
                <input type="text" className="forms--input" placeholder="Bottom text"/>
                <button className="forms--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            {/* <img src={require({memesData.data.memes[1].url})} /> */}
        </main>

    )
}

export default Meme