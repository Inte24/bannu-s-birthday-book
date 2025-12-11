import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlipbookPageProps {
  onNext: () => void;
}

const memories = [
  {
    title: "Our Story Begins",
    content: "Every love story is beautiful, but ours is my favorite. From the moment we met, I knew there was something special about you.",
    emoji: "💫",
  },
  {
    title: "Your Smile",
    content: "Your smile is the sunshine that brightens even my darkest days. It's my favorite thing in the whole world.",
    emoji: "😊",
  },
  {
    title: "Little Moments",
    content: "It's not the grand gestures, but the little moments with you that I treasure most - the laughs, the talks, the silence we share.",
    emoji: "✨",
  },
  {
    title: "My Safe Place",
    content: "In your arms, I've found my home. With you, I can be completely myself, and that's the greatest gift.",
    emoji: "🏠",
  },
  {
    title: "Adventures Together",
    content: "Every adventure is better with you by my side. Here's to all the memories we've made and all the ones yet to come!",
    emoji: "🌟",
  },
  {
    title: "Forever & Always",
    content: "I choose you. Today, tomorrow, and every day after. You are my person, my love, my everything.",
    emoji: "💕",
  },
];

const FlipbookPage = ({ onNext }: FlipbookPageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const goToPage = (index: number) => {
    if (index < 0 || index >= memories.length || isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFlipping(false);
    }, 300);
  };

  return (
    <div className="page-container">
      <div className="book-page animate-page-flip-in">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gradient text-center mb-6">
          A Little Book of Us 📖
        </h2>

        {/* Flipbook Container */}
        <div className="relative max-w-md mx-auto">
          {/* Book */}
          <div
            className={cn(
              "bg-cream rounded-lg shadow-card p-8 min-h-[300px] flex flex-col items-center justify-center transition-all duration-300",
              isFlipping && "opacity-0 scale-95"
            )}
          >
            <span className="text-5xl mb-4">{memories[currentIndex].emoji}</span>
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 text-center">
              {memories[currentIndex].title}
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              {memories[currentIndex].content}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToPage(currentIndex - 1)}
            disabled={currentIndex === 0}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center transition-all",
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-rose hover:text-primary-foreground"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => goToPage(currentIndex + 1)}
            disabled={currentIndex === memories.length - 1}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center transition-all",
              currentIndex === memories.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-rose hover:text-primary-foreground"
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {memories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentIndex ? "bg-rose w-6" : "bg-rose/30 hover:bg-rose/50"
              )}
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Page {currentIndex + 1} of {memories.length}
        </p>

        <div className="flex justify-center mt-6">
          <button onClick={onNext} className="romantic-btn flex items-center gap-2">
            Next Adventure <Heart className="w-4 h-4" fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipbookPage;
