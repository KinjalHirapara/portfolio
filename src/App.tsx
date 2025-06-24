import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Page from "./components/page";
import { useViewportHeight } from "./hooks/useViewportHeight";
function App() {
  useViewportHeight();

  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

export default App;
