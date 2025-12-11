import { useState, useEffect, useCallback } from "react";
import { Heart, Play, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeartGamePageProps {
  onNext: () => void;
}

interface FallingHeart {
  id: number;
  x: number;
  speed: number;
  size: number;
}

const HeartGamePage = ({ onNext }: HeartGamePageProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [hearts, setHearts] = useState<FallingHeart[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    setHearts([]);
    setGameOver(false);
  };

  const catchHeart = (id: number) => {
    setScore((prev) => prev + 1);
    setHearts((prev) => prev.filter((h) => h.id !== id));
  };

  // Spawn hearts
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const spawnInterval = setInterval(() => {
      const newHeart: FallingHeart = {
        id: Date.now() + Math.random(),
        x: Math.random() * 80 + 10,
        speed: Math.random() * 2 + 2,
        size: Math.random() * 20 + 25,
      };
      setHearts((prev) => [...prev, newHeart]);
    }, 800);

    return () => clearInterval(spawnInterval);
  }, [isPlaying, gameOver]);

  // Timer
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameOver(true);
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, gameOver]);

  // Move hearts down
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const moveInterval = setInterval(() => {
      setHearts((prev) =>
        prev
          .map((h) => ({ ...h, y: (h as any).y ? (h as any).y + h.speed : h.speed }))
          .filter((h) => (h as any).y < 100)
      );
    }, 50);

    return () => clearInterval(moveInterval);
  }, [isPlaying, gameOver]);

  const getMessage = () => {
    if (score >= 30) return "Incredible! You're a heart-catching champion! 💕💕💕";
    if (score >= 20) return "Amazing! Your love reflexes are on point! 💕💕";
    if (score >= 10) return "Great job! You've got a lot of love to give! 💕";
    return "Nice try! Every heart counts! 💕";
  };

  return (
    <div className="page-container">
      <div className="book-page animate-page-flip-in">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gradient text-center mb-4">
          Catch the Hearts! 💕
        </h2>

        {!isPlaying && !gameOver && (
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Click on the falling hearts to catch them! <br />
              How many can you catch in 30 seconds?
            </p>
            <button onClick={startGame} className="romantic-btn flex items-center gap-2 mx-auto">
              <Play className="w-5 h-5" /> Start Game
            </button>
          </div>
        )}

        {isPlaying && (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="bg-blush rounded-full px-4 py-2">
                <span className="font-bold text-foreground">Score: {score}</span>
              </div>
              <div className="bg-blush rounded-full px-4 py-2">
                <span className="font-bold text-foreground">Time: {timeLeft}s</span>
              </div>
            </div>

            <div className="relative bg-gradient-to-b from-blush to-rose-light/30 rounded-xl h-80 overflow-hidden">
              {hearts.map((heart) => (
                <button
                  key={heart.id}
                  onClick={() => catchHeart(heart.id)}
                  className="absolute transition-transform hover:scale-125 cursor-pointer animate-bounce-gentle"
                  style={{
                    left: `${heart.x}%`,
                    top: `${(heart as any).y || 0}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <Heart
                    className="text-rose hover:text-rose-dark"
                    fill="currentColor"
                    style={{ width: heart.size, height: heart.size }}
                  />
                </button>
              ))}
            </div>
          </>
        )}

        {gameOver && (
          <div className="text-center animate-scale-in">
            <div className="bg-blush/50 rounded-xl p-6 mb-6">
              <Heart className="w-16 h-16 text-rose mx-auto mb-4" fill="currentColor" />
              <p className="text-3xl font-display font-bold text-foreground mb-2">
                {score} Hearts!
              </p>
              <p className="text-muted-foreground">{getMessage()}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={startGame} className="romantic-btn-outline flex items-center gap-2">
                <RotateCcw className="w-4 h-4" /> Play Again
              </button>
              <button onClick={onNext} className="romantic-btn flex items-center gap-2">
                Next <Heart className="w-4 h-4" fill="currentColor" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeartGamePage;
