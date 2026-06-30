import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import config from "./config";
import anniversaryBg from "../assets/anniversaryBg.png";
import Picture4 from "../assets/Picture4.png";

function Closing() {
  const navigate = useNavigate();
  const christmasRef = useRef(null);

  useEffect(() => {
    if (christmasRef.current) {
      gsap.fromTo(
        christmasRef.current,
        { opacity: 0, scale: 0.5, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
      );
    }
  }, []);

 return (
  <div
    className="min-h-screen w-full flex flex-col items-center py-10 px-4"
    style={{
      backgroundImage: `url(${anniversaryBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-bold text-pink-700 text-center drop-shadow mb-6">
      Happy 1st Anniversary ❤️
    </h1>

    {/* Picture */}
    <img
      src={Picture4}
      alt="Picture4"
      className="w-64 md:w-80 rounded-3xl shadow-2xl border-4 border-white mb-8"
    />

    {/* Letter */}
    <div className="max-w-2xl text-center text-pink-900 bg-white/20 backdrop-blur-sm rounded-3xl px-8 py-8 shadow-xl">
      <p className="whitespace-pre-line leading-9 text-lg font-medium">
        {config.closingMessage}

         <p className="mt-6 text-pink-700 italic text-sm">
         July 2, 2025 — the beginning of my favorite love story. 🤍
        </p>
      </p>
    </div>

    {/* Button */}
    <button
      className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl shadow-lg transition"
      onClick={() => navigate("/letter")}
    >
      ← {config.previousPageText}
    </button>
  </div>
);
}

export default Closing;