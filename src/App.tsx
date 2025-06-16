import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Page from "./components/page";
function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

export default App;
