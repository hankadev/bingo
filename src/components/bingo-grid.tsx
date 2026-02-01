import { bingoItems } from "../data/data";
import BingoCard from "./bingo-card";

const BingoGrid = () => (
  <div className="grid grid-cols-5 gap-1 md:gap-2">
    {bingoItems.map((item) => (
      <BingoCard key={item.id} item={item} />
    ))}
  </div>
);

export default BingoGrid;
