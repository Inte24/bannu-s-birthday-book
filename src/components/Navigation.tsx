import { Heart, MessageCircleHeart, Grid3X3, BookOpen, Brain, Gamepad2, Sparkles, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentPage: number;
  onNavigate: (page: number) => void;
  isOpen: boolean;
}

const navItems = [
  { icon: Heart, label: "Home", page: 0 },
  { icon: MessageCircleHeart, label: "Hello", page: 1 },
  { icon: Grid3X3, label: "Crossword", page: 2 },
  { icon: BookOpen, label: "Flipbook", page: 3 },
  { icon: Brain, label: "Mind Reader", page: 4 },
  { icon: Gamepad2, label: "Game", page: 5 },
  { icon: Sparkles, label: "Facts", page: 6 },
  { icon: PartyPopper, label: "Finale", page: 7 },
];

const Navigation = ({ currentPage, onNavigate, isOpen }: NavigationProps) => {
  return (
    <nav
      className={cn(
        "fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-500",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="flex flex-col gap-2 p-2 md:p-3 bg-card/90 backdrop-blur-md rounded-r-2xl shadow-card border-r border-t border-b border-border">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={cn(
              "nav-icon group relative",
              currentPage === item.page && "active"
            )}
            title={item.label}
          >
            <item.icon className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute left-full ml-3 px-3 py-1 bg-card rounded-lg shadow-soft text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
