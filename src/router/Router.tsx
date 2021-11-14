import { LazyPage } from 'components';
import { App } from 'layouts';
import NoMatch from 'pages/NoMatch';
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LazyPage page="Index" />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Router;
