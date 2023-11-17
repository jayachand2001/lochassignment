import React from "react";
import "./Testimonials.css";
import vector from "../assests/Vector.svg";
import Carousel2 from "./Carousel2";
export default function Testimonials() {
  return (
    <div>
      <div className="head">
        <p>Testimonials</p>
      </div>
      <div className="line"></div>
      <div className="end">
        <div className="vector">
        <img src={vector} alt="vector" />
        </div>
        <Carousel2/>
      </div>
    </div>
  );
}
