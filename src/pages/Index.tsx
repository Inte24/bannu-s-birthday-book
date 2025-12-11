import { useState } from "react";
import { Menu } from "lucide-react";
import Navigation from "@/components/Navigation";
import FloatingHearts from "@/components/FloatingHearts";
import HomePage from "@/components/pages/HomePage";
import HelloPage from "@/components/pages/HelloPage";
import CrosswordPage from "@/components/pages/CrosswordPage";
import FlipbookPage from "@/components/pages/FlipbookPage";
import MindReaderPage from "@/components/pages/MindReaderPage";
import HeartGamePage from "@/components/pages/HeartGamePage";
import FactsPage from "@/components/pages/FactsPage";
import FinalePage from "@/components/pages/FinalePage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setNavOpen(false);
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, 7));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <HomePage onStart={nextPage} />;
      case 1:
        return <HelloPage onNext={nextPage} />;
      case 2:
        return <CrosswordPage onNext={nextPage} />;
      case 3:
        return <FlipbookPage onNext={nextPage} />;
      case 4:
        return <MindReaderPage onNext={nextPage} />;
      case 5:
        return <HeartGamePage onNext={nextPage} />;
      case 6:
        return <FactsPage onNext={nextPage} />;
      case 7:
        return <FinalePage onHome={() => goToPage(0)} />;
      default:
        return <HomePage onStart={nextPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      
      {/* Mobile menu toggle */}
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="fixed top-4 left-4 z-50 md:hidden w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center"
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      <Navigation currentPage={currentPage} onNavigate={goToPage} isOpen={navOpen} />
      
      <main className="relative z-10">
        {renderPage()}
      </main>
    </div>
  );
};

export default Index;
