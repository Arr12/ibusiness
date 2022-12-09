import React, { useState, useEffect } from "react";

function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setInterval(() => {
        setHide(true);
    }, 2000);
  }, []);

  return (
    <div class={`wrapper ${hide ? 'hidden' : 'block'}`}>
      <div className="top-1/2 left-1/3 absolute">
        <div class="line line1">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
        <div class="line line2">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
        <div class="line line3">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
        <div class="line line4">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
        <div class="line line5">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
        <div class="line line6">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
        <div class="line line7">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
        <div class="line line8">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
        <div class="line line9">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
        <div class="line line10">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
        <div class="line line11">
          <span class="circle circle-top"></span>
          <div class="dotted">
            <span class="dot dot-top"></span>
            <span class="dot dot-middle-top"></span>
            <span class="dot dot-middle-bottom"></span>
            <span class="dot dot-bottom"></span>
          </div>
          <span class="circle circle-bottom"></span>
        </div>
      </div>
    </div>
  );
}
export default Preloader;
