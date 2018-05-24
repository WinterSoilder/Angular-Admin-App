import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/login',
      },
      {
        title: 'Register',
        link: '/pages/register',
      },
      {
        title: 'Request Password',
        link: '/pages/forgot',
      },
      {
        title: 'Reset Password',
        link: '/pages/reset-password',
      },
    ],
  },
];
