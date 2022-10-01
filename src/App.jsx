import { useContext } from "react";
import { Navbar } from "./components/Navbar";
import { Title } from "./components/Title";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Title />
    </main>
  );
}

export default App;
