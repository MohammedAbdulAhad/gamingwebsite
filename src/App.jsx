import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";


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
  const mobileGames = [
    { name: "Flappy Bird", url: "https://flappybird.io" },
    { name: "Stack", url: "https://kizi.com/games/stack" },
    { name: "Moto X3M", url: "https://moto-x3m.com" },
    {
      name: "Jetpack Joyride Clone",
      url: "https://html5.gamedistribution.com/0d2c7c9a92454d4a9bdb540fd0b1709a/",
    },
    { name: "Temple Run 2 (Clone)", url: "https://templerun.io" },
    { name: "Subway Surfers (Clone)", url: "https://subwaysurf.io" },
    { name: "Basketball Stars", url: "https://basketball-stars.co" },
    { name: "Slope Game", url: "https://slope-game.io" },
    { name: "Color Tunnel", url: "https://colortunnel.io" },
    {
      name: "Tap Tap Shots",
      url: "https://www.crazygames.com/game/tap-tap-shots",
    },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      <main className="mx-auto px-4 py-4 w-full">
        <div className="flex flex-col items-center gap-6">
          {/* Bigger Game Container */}
          <div className="w-full h-[80vh] min-h-[500px] max-h-[800px] max-w-[1800px] bg-black bg-opacity-70 border-2 border-purple-500 rounded-lg overflow-hidden shadow-lg shadow-purple-500/20 relative">
            {gameUrl ? (
              <>
                <iframe
                  src={gameUrl}
                  title="Random Game"
                  className="w-full h-full"
                  frameBorder="0"
                  loading="lazy"
                  allow="fullscreen"
                />
                {isLoading && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <div className="text-purple-400 flex flex-col items-center">
                      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                      <span className="text-white font-medium">
                        Loading Game...
                      </span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Click below to start playing
                  </p>
                  <div className="text-purple-400 text-6xl animate-pulse">
                    🎮
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 active:scale-95 text-lg"
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? "LOADING..." : "PLAY RANDOM GAME"}
          </button>
        </div>
      </main>

      <footer className="text-center text-gray-400 text-sm py-4 border-t border-gray-800 mt-4">
        <p>The Ultimate Browser Gaming Experience</p>
      </footer>
    </div>
  );
}

export default App;
