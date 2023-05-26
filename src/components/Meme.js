import React, {useState} from "react"
import memesData from "../memesData"

function Meme() {
    const [memeUrl, setMemeUrl] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeUrl(memesArray[randomNumber].url)
    }

    return(
        <main className="meme">
            <div className="forms">
                <input type="text" className="forms--input" placeholder="Top text"/>
                <input type="text" className="forms--input" placeholder="Bottom text"/>
                <button className="forms--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={memeUrl} alt="meme-image" className="meme--image"/>
        </main>

    )
}

export default Meme