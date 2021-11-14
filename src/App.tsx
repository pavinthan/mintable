import { ErrorBoundary } from "components";
import { name, lang } from "config/env";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Router } from "router";
import store, { persistor } from "store";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <Helmet>
              <html lang={lang} />
              <title>{name}</title>
            </Helmet>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
