import React from "react"
import globeImage from "../images/globe.svg"
export default function Navbar() {
    return (
        <div className="Navbar">
            <img src={globeImage} alt="globe"/>
            <p>my travel journal</p>
        </div>
    )
}