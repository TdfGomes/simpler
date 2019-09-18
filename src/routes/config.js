import Edit from '../components/Edit';
import Efxs from '../components/EFXS';
import Record from '../components/Record';
import Settings from '../components/Settings';

export const routes = [
  {
    path: '/edit',
    component: Edit,
  },
  {
    path: '/efxs',
    component: Efxs,
  },
  {
    path: '/record',
    component: Record,
  },
  {
    path: '/settings',
    component: Settings,
  },
];
