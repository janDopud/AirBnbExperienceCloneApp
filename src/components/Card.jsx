import React from "react";

export default function Card({
  coverImage,
  rating,
  reviewCount,
  location,
  title,
  price
}) {
  return (
    <div className="card">
      <img
        src={`/images/${coverImage}`}
        className="card--photo"
        alt="card-logo"
      />
      <div className="card--stats">
        <img src={"/images/Star1.png"} className="card--star" alt="card-star" />
        <span className="card--rating">{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price} </span> | person
      </p>
    </div>
  );
}
