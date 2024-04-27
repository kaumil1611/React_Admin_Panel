// assets
import { IconUsers } from '@tabler/icons-react';

// constant
const icons = {
  IconUsers
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  // caption: '',
  type: 'group',
  children: [
    {
      id: 'user-pages',
      title: 'User Pages',
      type: 'collapse',
      icon: icons.IconUsers,

      children: [
        {
          id: 'login3',
          title: 'View Users',
          type: 'item',
          url: '/pages/view-users',
          target: false
        },
        /* {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        } */
      ]
    }
  ]
};

export default pages;
