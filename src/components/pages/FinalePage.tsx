import { Heart, Sparkles, PartyPopper, Gift } from "lucide-react";
import { useState, useEffect } from "react";

interface FinalePageProps {
  onHome: () => void;
}

const FinalePage = ({ onHome }: FinalePageProps) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-container relative overflow-hidden">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce-gentle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {i % 3 === 0 ? (
                <Heart className="w-4 h-4 text-rose" fill="currentColor" />
              ) : i % 3 === 1 ? (
                <Sparkles className="w-4 h-4 text-gold" />
              ) : (
                <PartyPopper className="w-4 h-4 text-rose-light" />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="book-page animate-page-flip-in text-center relative z-10">
        <div className="py-4">
          <div className="flex justify-center gap-3 mb-6">
            <PartyPopper className="w-10 h-10 text-gold animate-wiggle" />
            <Gift className="w-12 h-12 text-rose animate-pulse-gentle" />
            <PartyPopper className="w-10 h-10 text-gold animate-wiggle" style={{ animationDelay: "0.5s" }} />
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            Happy Birthday, Bannu!
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose to-transparent mx-auto my-6" />

          <div className="bg-blush/50 rounded-xl p-6 mb-6 max-w-md mx-auto">
            <p className="text-foreground leading-relaxed mb-4">
              Thank you for being the most amazing person in my life. Your kindness, your laughter, 
              and your love make every day brighter.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              On your special day, I want you to know that you deserve all the happiness in the world. 
              May this year bring you endless joy, wonderful surprises, and all your dreams coming true.
            </p>
            <p className="text-rose font-display text-xl font-bold">
              I love you more than words can say! 💕
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-6">
            {[...Array(7)].map((_, i) => (
              <Heart
                key={i}
                className="w-5 h-5 text-rose animate-pulse-gentle"
                fill="currentColor"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-rose/10 to-gold/10 rounded-xl p-6 mb-6">
            <p className="text-2xl font-display italic text-foreground">
              "You are my today and all of my tomorrows."
            </p>
            <p className="text-sm text-muted-foreground mt-2">— With all my love ❤️</p>
          </div>

          <button onClick={onHome} className="romantic-btn flex items-center gap-2 mx-auto">
            <Heart className="w-4 h-4" fill="currentColor" />
            Back to Start
          </button>

          <p className="text-sm text-muted-foreground mt-6">
            Made with 💕 just for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalePage;
