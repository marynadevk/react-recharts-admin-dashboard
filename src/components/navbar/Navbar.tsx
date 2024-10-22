import { FaExpand } from 'react-icons/fa';
import './navbar.scss';
import { AiOutlineAppstore } from 'react-icons/ai';
import { IoMdNotifications, IoMdSearch } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
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
          <RxAvatar />
          <span>Freyja</span>
        </div>
        <IoSettingsOutline className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
