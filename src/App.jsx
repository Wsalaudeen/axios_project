import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/title";
import Setup from "./examples/headers";

function App() {
  return (
    <main>
      <Title />
      <Setup />
    </main>
  );
}

export default App;
