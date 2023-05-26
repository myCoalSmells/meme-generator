import React from 'react'

function Header() {
    return (
        <header className="header">
            <img src={require("../images/troll-face.png")} alt="" className="header--image" />
            <h2 className='header--title'>Meme Generator</h2>
            <h3 className='header--author'>Michael Liu</h3>
        </header>
    )
}

export default Header