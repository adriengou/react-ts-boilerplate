import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppRouter from "./AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>App</h1>
      <AppRouter />
    </>
  );
}

export default App;
