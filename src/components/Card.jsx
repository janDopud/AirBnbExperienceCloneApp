import React from "react";

export default function Card(props) {
    
    let badgeText
    if(props.openSpots === 0){
        badgeText= "SOLD OUT"
    }else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    
  return (
    <div className="card">
        {
            badgeText && <div className="card--badge">{badgeText}</div>
        }
      <img
        src={`/images/${props.coverImage}`}
        className="card--photo"
        alt="card-logo"
      />
      <div className="card--stats">
        <img src={"/images/Star1.png"} className="card--star" alt="card-star" />
        <span className="card--rating">{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${props.price} </span> | person
      </p>
    </div>
  );
}
