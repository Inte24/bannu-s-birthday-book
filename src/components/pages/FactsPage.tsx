import { useState } from "react";
import { Sparkles, ChevronLeft, ChevronRight, Heart, Cake } from "lucide-react";
import { cn } from "@/lib/utils";

interface FactsPageProps {
  onNext: () => void;
}

const birthdayFacts = [
  {
    fact: "The 'Happy Birthday' song is over 100 years old and was originally titled 'Good Morning to All' written by two sisters in 1893.",
    emoji: "🎵",
  },
  {
    fact: "The world's largest birthday cake weighed over 128,000 pounds and was made in 1989 to celebrate the 100th birthday of Fort Payne, Alabama.",
    emoji: "🎂",
  },
  {
    fact: "In Germany, if you're unmarried on your 30th birthday, friends might make you sweep the steps of a public building!",
    emoji: "🧹",
  },
  {
    fact: "The most common birthday in the world is September 9th, while the least common is February 29th (leap year babies!).",
    emoji: "📅",
  },
  {
    fact: "Ancient Egyptians were the first to celebrate birthdays, but only for pharaohs. Greeks added candles to represent the moon goddess Artemis.",
    emoji: "🕯️",
  },
  {
    fact: "Statistically, more famous people are born in March than any other month!",
    emoji: "⭐",
  },
  {
    fact: "In Vietnam, everyone celebrates their birthday on New Year's Day (Tết), regardless of their actual birth date!",
    emoji: "🎊",
  },
  {
    fact: "The tradition of making a wish and blowing out candles comes from ancient Greeks who believed smoke carried prayers to the gods.",
    emoji: "✨",
  },
];

const FactsPage = ({ onNext }: FactsPageProps) => {
  const [currentFact, setCurrentFact] = useState(0);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % birthdayFacts.length);
  };

  const prevFact = () => {
    setCurrentFact((prev) => (prev - 1 + birthdayFacts.length) % birthdayFacts.length);
  };

  return (
    <div className="page-container">
      <div className="book-page animate-page-flip-in">
        <div className="flex justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-gold" />
          <Cake className="w-8 h-8 text-rose" />
          <Sparkles className="w-8 h-8 text-gold" />
        </div>

        <h2 className="text-2xl md:text-4xl font-display font-bold text-gradient text-center mb-2">
          Fun Birthday Facts! 🎉
        </h2>

        <p className="text-center text-muted-foreground mb-6 text-sm">
          Did you know these amazing things about birthdays?
        </p>

        <div className="relative max-w-lg mx-auto">
          <div className="bg-blush/50 rounded-xl p-8 min-h-[200px] flex flex-col items-center justify-center text-center">
            <span className="text-5xl mb-4">{birthdayFacts[currentFact].emoji}</span>
            <p className="text-foreground leading-relaxed">
              {birthdayFacts[currentFact].fact}
            </p>
          </div>

          {/* Navigation */}
          <button
            onClick={prevFact}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center hover:bg-rose hover:text-primary-foreground transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextFact}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center hover:bg-rose hover:text-primary-foreground transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {birthdayFacts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFact(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentFact ? "bg-rose w-6" : "bg-rose/30 hover:bg-rose/50"
              )}
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Fact {currentFact + 1} of {birthdayFacts.length}
        </p>

        <div className="flex justify-center mt-6">
          <button onClick={onNext} className="romantic-btn flex items-center gap-2">
            Final Page <Heart className="w-4 h-4" fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FactsPage;
