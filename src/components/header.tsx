const LETTER_COLORS = [
  "text-cyan",
  "text-pink",
  "text-yellow",
  "text-green",
  "text-red",
] as const;

const Header = () => (
  <header className="mb-6 md:mb-8 text-center">
    <h1 className="text-lg md:text-2xl text-cyan mb-4 tracking-wider">2026</h1>
    <div className="flex justify-center gap-2 mb-4">
      {"BINGO".split("").map((letter, i) => (
        <span
          key={i}
          className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-xl md:text-3xl font-bold pixel-border bg-card ${LETTER_COLORS[i]}`}
        >
          {letter}
        </span>
      ))}
    </div>
  </header>
);

export default Header;
