import { useState } from "react";
import { Check, RefreshCw, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface CrosswordPageProps {
  onNext: () => void;
}

const crosswordData = {
  grid: [
    ["L", "O", "V", "E", "", "B", "A", "N", "N", "U"],
    ["", "", "", "", "", "E", "", "", "", ""],
    ["H", "A", "P", "P", "Y", "A", "", "J", "O", "Y"],
    ["", "", "", "", "", "U", "", "", "", ""],
    ["", "S", "M", "I", "L", "E", "", "", "", ""],
    ["", "", "", "", "", "I", "", "", "", ""],
    ["F", "O", "R", "E", "V", "E", "R", "", "", ""],
    ["", "", "", "", "", "U", "", "", "", ""],
    ["", "", "", "K", "I", "S", "S", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ],
  clues: {
    across: [
      { num: 1, clue: "What I feel for you (4 letters)", answer: "LOVE", row: 0, col: 0 },
      { num: 2, clue: "Your beautiful name (5 letters)", answer: "BANNU", row: 0, col: 5 },
      { num: 3, clue: "Birthday mood (5 letters)", answer: "HAPPY", row: 2, col: 0 },
      { num: 4, clue: "What you bring to my life (3 letters)", answer: "JOY", row: 2, col: 7 },
      { num: 5, clue: "What lights up my day (5 letters)", answer: "SMILE", row: 4, col: 1 },
      { num: 6, clue: "How long I'll love you (7 letters)", answer: "FOREVER", row: 6, col: 0 },
      { num: 7, clue: "Sweet gesture (4 letters)", answer: "KISS", row: 8, col: 3 },
    ],
    down: [
      { num: 8, clue: "You're the most ___ person (9 letters)", answer: "BEAUTIFUL", row: 0, col: 5 },
    ],
  },
};

const CrosswordPage = ({ onNext }: CrosswordPageProps) => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleInput = (row: number, col: number, value: string) => {
    const key = `${row}-${col}`;
    setUserInputs((prev) => ({ ...prev, [key]: value.toUpperCase() }));
  };

  const checkAnswers = () => {
    let allCorrect = true;
    crosswordData.grid.forEach((row, rowIdx) => {
      row.forEach((cell, colIdx) => {
        if (cell !== "") {
          const key = `${rowIdx}-${colIdx}`;
          if (userInputs[key] !== cell) {
            allCorrect = false;
          }
        }
      });
    });
    setCompleted(allCorrect);
    if (allCorrect) {
      setShowAnswers(true);
    }
  };

  const revealAnswers = () => {
    const answers: { [key: string]: string } = {};
    crosswordData.grid.forEach((row, rowIdx) => {
      row.forEach((cell, colIdx) => {
        if (cell !== "") {
          answers[`${rowIdx}-${colIdx}`] = cell;
        }
      });
    });
    setUserInputs(answers);
    setShowAnswers(true);
    setCompleted(true);
  };

  return (
    <div className="page-container">
      <div className="book-page animate-page-flip-in max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gradient text-center mb-4">
          Love Crossword 💕
        </h2>

        <p className="text-center text-muted-foreground mb-4 text-sm">
          Solve this puzzle filled with words that remind me of you!
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Crossword Grid */}
          <div className="flex-1">
            <div className="grid gap-0.5 mx-auto w-fit">
              {crosswordData.grid.map((row, rowIdx) => (
                <div key={rowIdx} className="flex gap-0.5">
                  {row.map((cell, colIdx) => (
                    <div
                      key={`${rowIdx}-${colIdx}`}
                      className={cn(
                        "w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm font-bold",
                        cell === ""
                          ? "bg-transparent"
                          : "bg-blush border border-border rounded"
                      )}
                    >
                      {cell !== "" && (
                        <input
                          type="text"
                          maxLength={1}
                          value={userInputs[`${rowIdx}-${colIdx}`] || ""}
                          onChange={(e) => handleInput(rowIdx, colIdx, e.target.value)}
                          className={cn(
                            "w-full h-full text-center bg-transparent outline-none font-bold text-sm uppercase",
                            showAnswers && userInputs[`${rowIdx}-${colIdx}`] === cell
                              ? "text-green-600"
                              : "text-foreground"
                          )}
                          disabled={showAnswers}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Clues */}
          <div className="flex-1 text-sm">
            <div className="mb-4">
              <h3 className="font-bold text-foreground mb-2">Across →</h3>
              <ul className="space-y-1 text-muted-foreground">
                {crosswordData.clues.across.map((clue) => (
                  <li key={clue.num}>{clue.num}. {clue.clue}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Down ↓</h3>
              <ul className="space-y-1 text-muted-foreground">
                {crosswordData.clues.down.map((clue) => (
                  <li key={clue.num}>{clue.num}. {clue.clue}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {completed && (
          <div className="text-center mt-4 p-4 bg-green-100 rounded-xl animate-scale-in">
            <p className="text-green-700 font-medium">
              🎉 You did it! You're amazing! 🎉
            </p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button onClick={checkAnswers} className="romantic-btn-outline flex items-center gap-2">
            <Check className="w-4 h-4" /> Check
          </button>
          <button onClick={revealAnswers} className="romantic-btn-outline flex items-center gap-2">
            <RefreshCw className="w-4 h-4" /> Reveal
          </button>
          <button onClick={onNext} className="romantic-btn flex items-center gap-2">
            Next <Heart className="w-4 h-4" fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrosswordPage;
