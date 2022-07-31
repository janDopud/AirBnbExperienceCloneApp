import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={"/images/hero-logo.png"}
        className="hero--logo"
        alt="hero-logo"
      />
      <h1 className="hero--header">Online Experience </h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
