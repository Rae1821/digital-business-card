import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img className="bio" src="./Images/img.jpg"/>
            <h3>Rachel Dooley</h3>
            <p className="title">Frontend Developer</p>
            <p className="website">rachelandersondooley.com</p>
            <button type="submit" className="email">
            <img src="./Images/Icon.png" className="envelope"/><p>Email</p></button>
        </div>
    )
}