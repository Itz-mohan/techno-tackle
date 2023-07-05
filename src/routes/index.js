import Main from '../layouts';
import sellers from '../layouts/sellers';

var indexRoutes = [
  { path: '/', name: 'MainPage', component: Main },
  { path: '/best-sellers', name: 'SellersPage', component: sellers },
];

export default indexRoutes;
