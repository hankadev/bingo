import type { BingoItem } from "../data/data";

const BingoCard = ({ item }: { item: BingoItem }) => (
  <div className="relative aspect-square p-1 md:p-2 bg-card border-2 border-border overflow-hidden">
    {/* Corner decorations */}
    <div className="absolute top-0 left-0 w-1 h-1 md:w-1.5 md:h-1.5 bg-border z-20" />
    <div className="absolute top-0 right-0 w-1 h-1 md:w-1.5 md:h-1.5 bg-border z-20" />
    <div className="absolute bottom-0 left-0 w-1 h-1 md:w-1.5 md:h-1.5 bg-border z-20" />
    <div className="absolute bottom-0 right-0 w-1 h-1 md:w-1.5 md:h-1.5 bg-border z-20" />

    {/* Completed overlay */}
    {item.completed && (
      <div className="absolute inset-0 bg-green/25 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-3 md:h-4 bg-linear-to-r from-transparent via-green to-transparent rotate-45 rounded-full shadow-[0_0_12px_var(--color-green)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-3 md:h-4 bg-linear-to-r from-transparent via-green to-transparent -rotate-45 rounded-full shadow-[0_0_12px_var(--color-green)]" />
      </div>
    )}

    {/* Content */}
    <div
      className={`flex flex-col items-center justify-center h-full gap-1 ${item.completed ? "opacity-60" : ""}`}
    >
      <span className="text-base md:text-xl">{item.emoji}</span>
      <span className="text-[6px] md:text-[8px] leading-tight text-center px-0.5">
        {item.text}
      </span>

      {/* Progress bar */}
      {item.progress !== undefined && !item.completed && (
        <div className="w-[90%] h-1 md:h-1.5 bg-background/50 overflow-hidden rounded-sm mt-1">
          <div
            className="h-full bg-pink transition-all duration-300 shadow-[0_0_6px_var(--color-pink)]"
            style={{ width: `${item.progress}%` }}
          />
        </div>
      )}
    </div>
  </div>
);

export default BingoCard;
