import React, {useState} from "react"
import memesData from "../memesData"

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({...prevMeme, url: memesArray[randomNumber].url}))
    }

    return(
        <main className="meme">
            <div className="forms">
                <input type="text" className="forms--input" placeholder="Top text"/>
                <input type="text" className="forms--input" placeholder="Bottom text"/>
                <button className="forms--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={meme.url} alt="meme-image" className="meme--image"/>
        </main>

    )
}

export default Meme