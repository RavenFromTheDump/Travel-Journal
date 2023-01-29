import React from "react"

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={`${props.card.img}`} alt="" className="card-img" />
            <div className="card-info">
                <div className="card-info-location">
                    <div className="card-info-location-left">
                        <img src="/map-pin.png" alt="" className="card-map-pin" />
                        <p className="card-location">{props.card.location}</p>
                    </div>
                    <a href="" className="location-link">View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.card.title}</h1>
                <h3 className="card-date">{props.card.date}</h3>
                <p className="card-text">{props.card.text}</p>
            </div>
        </div>
    )
}