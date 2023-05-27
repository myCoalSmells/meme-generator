import React, {useState, useEffect} from "react"

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        setMeme(prevMeme => ({...prevMeme, url: allMemeImages[randomNumber].url}))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return(
        <main className="meme">
            <div className="forms">
                <input type="text" className="forms--input" placeholder="Top text" onChange={handleChange} name="topText" value={meme.topText}/>
                <input type="text" className="forms--input" placeholder="Bottom text" onChange={handleChange} name="bottomText" value={meme.bottomText}/>
                <button className="forms--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.url} alt="meme-image" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>

    )
}

export default Meme