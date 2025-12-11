import { useState } from "react";
import { Brain, Sparkles, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface MindReaderPageProps {
  onNext: () => void;
}

const steps = [
  {
    instruction: "Think of a number between 1 and 10",
    emoji: "🔢",
  },
  {
    instruction: "Multiply it by 2",
    emoji: "✖️",
  },
  {
    instruction: "Add 8 to the result",
    emoji: "➕",
  },
  {
    instruction: "Divide the result by 2",
    emoji: "➗",
  },
  {
    instruction: "Subtract the original number you thought of",
    emoji: "➖",
  },
];

const MindReaderPage = ({ onNext }: MindReaderPageProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsRevealing(true);
      setTimeout(() => {
        setShowResult(true);
      }, 2000);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setShowResult(false);
    setIsRevealing(false);
  };

  return (
    <div className="page-container">
      <div className="book-page animate-page-flip-in text-center">
        <div className="flex justify-center mb-4">
          <Brain className="w-12 h-12 text-rose animate-pulse-gentle" />
        </div>

        <h2 className="text-2xl md:text-4xl font-display font-bold text-gradient mb-2">
          Mind Reading Trick 🔮
        </h2>

        <p className="text-muted-foreground mb-6">
          Let me read your mind... Follow the instructions carefully!
        </p>

        {!showResult ? (
          <>
            <div className="bg-blush/50 rounded-xl p-6 mb-6 min-h-[150px] flex flex-col items-center justify-center">
              {isRevealing ? (
                <div className="animate-pulse-gentle">
                  <Sparkles className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground">
                    Reading your mind...
                  </p>
                </div>
              ) : (
                <>
                  <span className="text-4xl mb-4">{steps[currentStep].emoji}</span>
                  <p className="text-xl font-display font-medium text-foreground">
                    {steps[currentStep].instruction}
                  </p>
                </>
              )}
            </div>

            {/* Progress */}
            <div className="flex justify-center gap-2 mb-6">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index <= currentStep ? "bg-rose" : "bg-rose/30"
                  )}
                />
              ))}
            </div>

            {!isRevealing && (
              <button onClick={handleNext} className="romantic-btn">
                {currentStep < steps.length - 1 ? "Next Step" : "Read My Mind!"}
              </button>
            )}
          </>
        ) : (
          <div className="animate-scale-in">
            <div className="bg-gradient-to-br from-rose/20 to-gold/20 rounded-xl p-8 mb-6">
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
              <p className="text-2xl font-display font-bold text-foreground mb-2">
                Your number is...
              </p>
              <p className="text-6xl font-display font-bold text-gradient mb-4">4</p>
              <p className="text-muted-foreground">
                And 4 represents something special... <br />
                The four letters in the word{" "}
                <span className="text-rose font-bold">LOVE</span> 💕
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={reset} className="romantic-btn-outline">
                Try Again
              </button>
              <button onClick={onNext} className="romantic-btn flex items-center gap-2">
                Next <Heart className="w-4 h-4" fill="currentColor" />
              </button>
            </div>
          </div>
        )}

        {!showResult && (
          <p className="text-xs text-muted-foreground mt-6 italic">
            (Don't worry, it's math magic - it always works!)
          </p>
        )}
      </div>
    </div>
  );
};

export default MindReaderPage;
