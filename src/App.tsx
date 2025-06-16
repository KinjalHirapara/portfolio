import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Page from "./context/page";
function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

export default App;
