import { Heart, Sparkles } from "lucide-react";

interface HomePageProps {
  onStart: () => void;
}

const HomePage = ({ onStart }: HomePageProps) => {
  return (
    <div className="page-container">
      <div className="book-page text-center relative">
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 text-rose/30">
          <Sparkles className="w-8 h-8 animate-sparkle" />
        </div>
        <div className="absolute top-4 right-4 text-rose/30">
          <Sparkles className="w-8 h-8 animate-sparkle" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-rose/20">
          <Heart className="w-12 h-12 animate-pulse-gentle" fill="currentColor" />
        </div>

        {/* Main content */}
        <div className="py-8 md:py-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-rose animate-pulse-gentle" fill="currentColor" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-4">
            My Dearest Bannu
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose to-transparent mx-auto my-6" />
          
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-md mx-auto leading-relaxed">
            Here's a little collection for your birthday
          </p>

          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-4 h-4 text-rose-light"
                fill="currentColor"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          <button
            onClick={onStart}
            className="romantic-btn text-lg px-12 py-4 animate-bounce-gentle"
          >
            Start ✨
          </button>

          <p className="text-sm text-muted-foreground mt-8 italic">
            Made with love, just for you 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
