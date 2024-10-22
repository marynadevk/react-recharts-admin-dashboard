import { BsClipboard2CheckFill } from 'react-icons/bs';
import { FaRegFileCode, FaRegUser } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { GrHomeRounded } from 'react-icons/gr';
import { IoBarChartOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdLibraryBooks, MdOutlineSettingsBackupRestore } from 'react-icons/md';
import { PiNotePencilBold } from 'react-icons/pi';
import { RiApps2Line } from 'react-icons/ri';
import { SiFormspree } from 'react-icons/si';
import { SlBasket } from 'react-icons/sl';

export const menuData = [
  {
    id: 1,
    title: 'main',
    listItems: [
      {
        id: 1,
        title: 'Homepage',
        url: '/',
        icon: <GrHomeRounded />,
      },
      {
        id: 2,
        title: 'Profile',
        url: '/users/1',
        icon: <FaRegUser />,
      },
    ],
  },
  {
    id: 2,
    title: 'lists',
    listItems: [
      {
        id: 1,
        title: 'Users',
        url: '/users',
        icon: <FaRegUser />,
      },
      {
        id: 2,
        title: 'Products',
        url: '/products',
        icon: <SlBasket />,
      },
      {
        id: 3,
        title: 'Orders',
        url: '/orders',
        icon: <BsClipboard2CheckFill />,
      },
      {
        id: 4,
        title: 'Posts',
        url: '/posts',
        icon: <MdLibraryBooks />,
      },
    ],
  },
  {
    id: 3,
    title: 'general',
    listItems: [
      {
        id: 1,
        title: 'Elements',
        url: '/',
        icon: <RiApps2Line />,
      },
      {
        id: 2,
        title: 'Notes',
        url: '/',
        icon: <PiNotePencilBold />,
      },
      {
        id: 3,
        title: 'Forms',
        url: '/',
        icon: <SiFormspree />,
      },
      {
        id: 4,
        title: 'Calendar',
        url: '/',
        icon: <FaCalendarDays />,
      },
    ],
  },
  {
    id: 4,
    title: 'Maintenance',
    listItems: [
      {
        id: 1,
        title: 'Settings',
        url: '/',
        icon: <IoSettingsOutline />,
      },
      {
        id: 2,
        title: 'Backups',
        url: '/',
        icon: <MdOutlineSettingsBackupRestore />,
      },
    ],
  },
  {
    id: 5,
    title: 'analytics',
    listItems: [
      {
        id: 1,
        title: 'Charts',
        url: '/',
        icon: <IoBarChartOutline />,
      },
      {
        id: 2,
        title: 'Logs',
        url: '/',
        icon: <FaRegFileCode />,
      },
    ],
  },
];
