import React from "react"
import pointerImage from "../images/pointer.svg"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.item.imageUrl}/>
            <div className="card-info">
                <img src={pointerImage} alt="pointer" className="pointer"/>
                <p className="card-info__location">{props.item.location.toUpperCase()}</p>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                <p className="card-info__title">{props.item.title}</p>
                <p className="card-info__dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card-info__description">{props.item.description}</p>
            </div>
        </div>
    )
}