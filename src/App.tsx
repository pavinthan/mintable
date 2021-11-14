import { ErrorBoundary } from "components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "router";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
