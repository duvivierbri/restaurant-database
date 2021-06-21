import React, { Component } from "react"
import ReactDOM from 'react-dom';

//Each Reservation will be displayed in one of these cards on the "See Reservations" Page
function ReservationCard(props){
    return (
        <div className="reservationCard">
            <div className="reservationCardInfo">
                <h3 className="cardName">Name: {props.reservation.name}</h3>
                <p>Scheduled For: {props.reservation.date}, {props.reservation.time}</p>
            </div>

            <div className="deleteButton">
                <button>Delete</button>
            </div>
        </div>
        
    )
} export default ReservationCard;