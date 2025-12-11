import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  delay: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: FloatingHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 2,
      };
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 4000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart text-rose"
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart
            fill="currentColor"
            style={{ width: heart.size, height: heart.size }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
