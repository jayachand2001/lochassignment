import React, { Component } from "react";
import "./Carousel2.css";

class Carousel2 extends Component {
  componentDidMount() {
    let sliderContainer = document.querySelector(".slider-container");
    let innerSlider = document.querySelector(".inner-slider");

    let pressed = false;
    let startX;
    let x;

    sliderContainer.addEventListener("mousedown", (e) => {
      pressed = true;
      startX = e.offsetX - innerSlider.offsetLeft;
      sliderContainer.style.cursor = "grabbing";
    });

    sliderContainer.addEventListener("mouseenter", () => {
      sliderContainer.style.cursor = "grab";
    });

    sliderContainer.addEventListener("mouseup", () => {
      sliderContainer.style.cursor = "grab";
      pressed = false;
    });

    sliderContainer.addEventListener("mousemove", (e) => {
      if (!pressed) return;
      e.preventDefault();

      x = e.offsetX;
      innerSlider.style.left = `${x - startX}px`;
    });

    const checkBoundary = () => {
      let outer = sliderContainer.getBoundingClientRect();
      let inner = innerSlider.getBoundingClientRect();

      if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
      }

      if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
      }
    };

    sliderContainer.addEventListener("mousemove", (e) => {
      if (!pressed) return;
      e.preventDefault();

      x = e.offsetX;
      innerSlider.style.left = `${x - startX}px`;
      checkBoundary();
    });
  }

  render() {
    return (
      <div>
        <div className="slider-container">
          <div className="inner-slider">
            <div className="card">
              <p className="sub-card">
                <span className="name">Jack F</span>{" "}
                <span className="post">Ex Blackrock PM</span>
              </p>
              <p className="description">
                “Love how Loch integrates portfolio analytics and whale watching
                into one unified app.”
              </p>
            </div>
            <div className="card">
              <p className="sub-card">
                <span className="name">Yash P</span>{" "}
                <span className="post">Research, 3poch Crypto Hedge Fund</span>
              </p>
              <p className="description">
                “I use Loch everyday now. I don't think I could analyze crypto
                whale trends markets without it. I'm addicted!”
              </p>
            </div>
            <div className="card" style={{width: 531}}>
              <p className="sub-card">
                <span className="name">Shiv S</span>{" "}
                <span className="post">Co-Founder Magik Labs</span>
              </p>
              <p className="description" >
                “Managing my own portfolio is helpful and well designed. What’s
                really interesting is watching the whales though. No one else
                has made whale tracking so simple.”
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel2;
