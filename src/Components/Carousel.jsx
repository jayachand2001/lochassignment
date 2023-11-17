import React from "react";
import "./Carousel.css";
import bellicon2 from "../assests/bell2.svg";
import barchart from "../assests/bar-chart-2.svg";
import tick from "../assests/icon.svg";
import traingledown from "../assests/triangle-down.svg";
import clock from "../assests/clock.svg";
import { useState } from "react";

export default function () {
  const [buttonText, setButtonText] = useState("David");

  const handleHoverEnter = () => {
    setButtonText("hello@gmail.com");
  };

  const handleHoverLeave = () => {
    setButtonText("David");
  };
  return (
    <div >
      <div className="logo-list">
        <div className="logo-list__logo-wrap">
          <div className="logo-list__logo1">
            <div className="sub-logo-list">
              <div className="icons">
                <img src={bellicon2} alt="Bell" />
                <p className="text1">Save</p>
              </div>
              <p className="text3">
                We’ll be sending notifications to you here
              </p>
              <button
                className="hellobutton"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                {buttonText}
              </button>
            </div>
          </div>
          <div className="logo-list__logo2">
            <div className="sub-logo-list">
              <div className="icons">
                <img src={barchart} alt="barchart" />
                <img
                  style={{
                    borderRadius: 4.2,
                    background: "#0071E3",
                    width: 14,
                    height: 14,
                  }}
                  src={tick}
                  alt="tick"
                />
              </div>
              <p className="text2" style={{marginTop: 55.3}}>Notify me when any wallets move more than</p>
              <div className="select">
                <p
                  className="text1"
                  style={{
                    color: "var(--grey-800, #313233)",
                    textAlign: "center",
                  }}
                >
                  $1,000.00
                </p>
                <img src={traingledown} alt="triangledown" />
              </div>
            </div>
          </div>
          <div className="logo-list__logo3">
            <div className="sub-logo-list">
              <div className="icons">
                <img src={clock} alt="clock" />
                <img
                  style={{
                    borderRadius: 4.2,
                    background: "#0071E3",
                    width: 14,
                    height: 14,
                  }}
                  src={tick}
                  alt="tick"
                />
              </div>
              <p className="text2" style={{marginTop: 39.2, marginBottom: 'auto'}} >Notify me when any wallet dormant for</p>
              <div className="select">
                <p className="text1">{`<`} 30 days</p>
                <img src={traingledown} alt="triangledown" />
              </div>
              <p className="text2">becomes active</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
