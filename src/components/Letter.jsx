import React, { useEffect, useRef } from "react";
import { gsap, CSSRulePlugin } from "gsap/all";
import { ArrowLeft, ArrowRight } from "./icons";
import { useNavigate } from "react-router-dom";
import config from "./config"; // Import config file
import "../index.css";

gsap.registerPlugin(CSSRulePlugin);

function Letter() {
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const flap = CSSRulePlugin.getRule(".envelope:before");
    const t1 = gsap.timeline({ paused: true });
    t1.to(flap, {
      duration: 0.5,
      cssRule: { rotateX: 180 },
    })
      .set(flap, { cssRule: { zIndex: 10 } })
      .to(letterRef.current, {
        scale: 0.8,
        translateY: -200,
        duration: 0.9,
        ease: "back.inOut(1.5)",
      })
      .set(letterRef.current, { zIndex: 40 })
      .to(letterRef.current, {
        duration: 0.7,
        ease: "back.out(0.4)",
        translateY: -5,
        translateZ: 250,
      });

    const openCard = () => {
      t1.play();
    }

    const closeCard = (e) => {
      e.stopPropagation();
      t1.reverse();
    };

    const envelopeElement = envelopeRef.current;
    const closeButton = letterRef.current.querySelector(".close");

    envelopeElement.addEventListener("click", openCard);
    closeButton.addEventListener("click", closeCard);

    return () => {
      envelopeElement.removeEventListener("click", openCard);
      closeButton.removeEventListener("click", closeCard);
    };
  }, []);

  return (

  <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 flex flex-col items-center justify-center relative overflow-hidden">


<div className="absolute top-10 left-10 text-4xl animate-bounce">💖</div>
<div className="absolute top-20 right-10 text-3xl animate-pulse">✨</div>
<div className="absolute bottom-24 left-16 text-3xl animate-bounce">💕</div>
<div className="absolute bottom-32 right-16 text-4xl animate-pulse">🌸</div>

<div className="w-[90%] max-w-[400px]">
  <div className="flex-grow flex items-center justify-center h-[500px]">

    <div className="letter-container">
      <div className="content">

        <div className="envelope" ref={envelopeRef}></div>

        <div className="letter" ref={letterRef}>
          <div className="body">
           <span className="close">❤️</span>

            <div className="message">
              <div className="text-center px-3">
               
              <p className="message">
         {config.loveLetterMessage}
          <br /><br />
          
              </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>

  <div className="flex justify-between w-full px-6 mt-12">
    <button
      className="px-4 py-2 flex justify-center items-center bg-white/30 gap-2 hover:bg-white/50 backdrop-blur-sm text-pink-700 text-sm sm:text-base border border-white rounded-lg"
      onClick={() => navigate(config.recapRedirectPath)}
    >
      <ArrowLeft /> {config.previousPageText}
    </button>

    <button
      className="px-4 py-2 flex justify-center items-center bg-white/30 gap-2 hover:bg-white/50 backdrop-blur-sm text-pink-700 text-sm sm:text-base border border-white rounded-lg"
      onClick={() => navigate(config.letterNextPage)}
    >
      {config.nextPageText} <ArrowRight />
    </button>
  </div>

</div>
</div>

);

}

export default Letter;
