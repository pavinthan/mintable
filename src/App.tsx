import { ErrorBoundary } from 'components';
import { name, lang } from 'config/env';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'router';
import store, { persistor } from 'store';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DndProvider backend={HTML5Backend}>
            <HelmetProvider>
              <Helmet>
                <html lang={lang} />
                <title>{name}</title>
              </Helmet>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </HelmetProvider>
          </DndProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
