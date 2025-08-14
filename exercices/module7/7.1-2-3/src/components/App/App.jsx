import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Menu from "components/Menu";

const App = () => (
  <div className="layout">
    <Header />
    <Menu />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default App;
