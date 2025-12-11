import { useState } from "react";
import { Heart, Cake, Stars } from "lucide-react";

interface HelloPageProps {
  onNext: () => void;
}

const HelloPage = ({ onNext }: HelloPageProps) => {
  const [message, setMessage] = useState("");

  return (
    <div className="page-container">
      <div className="book-page animate-page-flip-in">
        <div className="text-center">
          <div className="flex justify-center gap-2 mb-4">
            <Stars className="w-8 h-8 text-gold animate-sparkle" />
            <Cake className="w-10 h-10 text-rose" />
            <Stars className="w-8 h-8 text-gold animate-sparkle" style={{ animationDelay: "0.5s" }} />
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-2">
            Hello, Beautiful!
          </h2>

          <div className="w-16 h-0.5 bg-rose/30 mx-auto my-4" />

          <p className="text-xl md:text-2xl text-foreground font-display italic mb-6">
            Happy Birthday, My Love! 🎂
          </p>

          <div className="bg-blush/50 rounded-xl p-6 mb-6 text-left">
            <p className="text-muted-foreground leading-relaxed mb-4">
              On this special day, I want you to know how incredibly lucky I am to have you in my life. 
              Every moment with you is a gift, and your smile lights up my entire world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This little website is my way of showing you just a tiny piece of how much you mean to me. 
              I hope it brings a smile to your beautiful face! 💕
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-muted-foreground mb-2 text-left">
              Write your birthday wish here (for yourself!):
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="My wish for this year is..."
              className="w-full h-24 px-4 py-3 rounded-xl bg-background border border-border focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none resize-none transition-all"
            />
          </div>

          <div className="flex justify-center gap-4">
            <button onClick={onNext} className="romantic-btn">
              Continue the Adventure <Heart className="inline w-4 h-4 ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloPage;
