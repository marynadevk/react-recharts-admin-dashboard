import { Outlet } from 'react-router-dom';
import { Menu } from '../menu/Menu';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';

export const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
