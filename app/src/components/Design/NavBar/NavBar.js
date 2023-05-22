// import { useTranslation } from 'react-i18next';
// import React from 'react';
// import './NavBar.css';

// import {
//   AdminRoutes, AuthRoutes, ImmoRoutes, MakelaarRoutes
// } from '../../../core/routing';

// import NavBarItems from './NavBarItems';

// function NavBar() {
//   const { t } = useTranslation();
//   const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
//   let role = 'CLIENT';
//   if (loggedinUser) {
//     role = loggedinUser.role;
//   }

//   let items = [
//     {
//       href: ImmoRoutes.Search,
//       label: t('Navigation.Search'),
//     },
//   ];
//   if (role === 'IMMO') {
//     items = [
//       ...items,
//       {
//         href: MakelaarRoutes.Dash,
//         label: t('Navigation.Dash')
//       },
//       {
//         href: MakelaarRoutes.SettingsProfile,
//         label: t('Navigation.SettingsProfile')
//       }
//     ];
//   } else if (role === 'ADMIN') {
//     items = [
//       ...items,
//       {
//         href: AdminRoutes.Dash,
//         label: t('Navigation.Dash')
//       },
//       {
//         href: AdminRoutes.HouseOverview,
//         label: t('Navigation.PropertiesOverview')
//       },
//     ];
//   } else if (role === 'CLIENT') {
//     items = [
//       ...items,
//       {
//         href: AuthRoutes.Login,
//         label: t('Navigation.Login')
//       },

//     ];
//   }

//   /* } */
//   return (
//     <NavBarItems navItems={items} />
//   );
// }

// export default NavBar;
