import BingoGrid from "./components/bingo-grid";
import Header from "./components/header";

const App = () => (
  <main className="min-h-screen bg-background p-2 md:p-4 lg:p-6">
    <div className="mx-auto max-w-2xl lg:max-w-3xl">
      <Header />
      <BingoGrid />
    </div>
  </main>
);

export default App;
