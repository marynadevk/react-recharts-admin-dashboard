import { FaExpand } from 'react-icons/fa';
import './navbar.scss';
import { AiOutlineAppstore } from 'react-icons/ai';
import { IoMdNotifications, IoMdSearch } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiLogoCodepen } from 'react-icons/bi';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <BiLogoCodepen />
        <span>admin_space</span>
      </div>
      <div className="icons">
        <IoMdSearch className="icon" />
        <AiOutlineAppstore className="icon" />
        <FaExpand className="icon" />
        <div className="notification">
          <IoMdNotifications />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://m.media-amazon.com/images/I/41Hbid1GQWL._AC_UF894,1000_QL80_.jpg"
            alt="users-img"
          />
          <span>Freyja</span>
        </div>
        <IoSettingsOutline className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
