import { Header, Footer } from "components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
