// App.js

import { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BannerAd from "./components/BannerAd";

// NativeBannerAd component using ref (recommended)
function NativeBannerAd() {
  const adRef = useRef(null);

  useEffect(() => {
    // Clean up previous ad if re-rendered
    if (adRef.current) {
      adRef.current.innerHTML = "";
      const script = document.createElement("script");
      script.src =
        "//pl26697699.profitableratecpm.com/40df9a58267f9dcd1fad87abd0cfb998/invoke.js";
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      adRef.current.appendChild(script);
    }
    // Clean up on unmount
    return () => {
      if (adRef.current) adRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={adRef}
      className="w-full max-w-[728px] h-[90px] my-4 mx-auto"
      style={{ minWidth: "320px" }}
    ></div>
  );
}

function App() {
  const pcGames = [
    "https://krunker.io/",
    "https://shellshock.io/",
    "https://bitheroesarena.io/",
    "https://venge.io/",
    "https://1v1.lol/",
    "https://smashkarts.io/",
    "https://zombsroyale.io/",
    "https://superhotgame.com/",
    "https://miniroyale.io/",
  ];

  const [gameUrl, setGameUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    const random = Math.floor(Math.random() * pcGames.length);
    setGameUrl(pcGames[random]);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          <BannerAd />
          <NativeBannerAd />

          <div className="w-full h-[80vh] min-h-[500px] max-h-[800px] max-w-[1600px] bg-gray-900 border border-purple-600 rounded-xl overflow-hidden shadow-2xl relative">
            {gameUrl ? (
              <>
                <iframe
                  src={gameUrl}
                  title="Random Game"
                  className="w-full h-full"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                />
                {isLoading && (
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                    <div className="text-purple-400 flex flex-col items-center">
                      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                      <span className="text-white font-semibold">
                        Loading Game...
                      </span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <p className="text-gray-400 mb-4 text-lg">
                  Click the button below to play a random game
                </p>
                <span className="text-6xl animate-bounce">🎮</span>
              </div>
            )}
          </div>

          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-200 transform hover:scale-105 shadow-md disabled:opacity-50"
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? "LOADING..." : "PLAY RANDOM GAME"}
          </button>
        </div>
      </main>

      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        <p>© 2025 - The Ultimate Browser Gaming Experience</p>
      </footer>
    </div>
  );
}

export default App;
