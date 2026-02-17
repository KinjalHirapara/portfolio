import Page from "./components/page";
import { useViewportHeight } from "./hooks/useViewportHeight";
function App() {
  useViewportHeight();

  return <Page />;
}

export default App;
