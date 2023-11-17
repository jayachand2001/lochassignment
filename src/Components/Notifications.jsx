import React from "react";
import "./Notifications.css";
import bellicon from "../assests/Bell.svg";
import eyeicon from "../assests/Eye.svg";
import Cohorts from "../assests/Cohorts1.png";
import { useState } from "react";
import Carousel from "./Carousel"


export default function Notifications() {

  return (
    <div>
      <div className="sub_container1">
        <div className="content1">
          <img src={bellicon} alt="Bell" />
          <p className="one">
            Get notified when a highly correlated whale makes a move
          </p>
          <p className="two">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <Carousel/>
      </div>
      <div className="sub_container2">
        <div>
          <img
            style={{ width: 335, height: 306, borderRadius: 12 }}
            src={Cohorts}
            alt="Cohorts"
          />
        </div>
        <div className="content2">
          <div>
            <img className="eye" src={eyeicon} alt="Eye" />
          </div>
          <p className="three">Watch what the whales are doing</p>
          <p className="four">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </div>
    </div>
  );
}
