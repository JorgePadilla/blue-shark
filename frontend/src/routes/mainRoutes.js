import Board from 'containers/Board';
import SignIn from 'containers/SignIn';
import NotFound from 'containers/NotFound';
import Agenda from 'containers/Agenda';
import Paciente from 'containers/Paciente';

const mainRoutes = [
  {
    exact: true,
    path: '/',
    name: 'Home',
    icon: 'home',
    component: Board,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/signin',
    name: 'Sign In',
    icon: 'login',
    component: SignIn,
  },
  {
    path: '/paciente',
    name: 'Pacientes',
    icon: 'user',
    component: Paciente,
  },
  {
    path: '/agenda',
    name: 'Agenda',
    icon: 'calendar',
    component: Agenda,
  },
  {
    path: '/paciente',
    name: 'Facturación',
    icon: 'form',
    component: SignIn,
  },
  {
    path: '/paciente',
    name: 'Reportes',
    icon: 'bar-chart',
    component: SignIn,
  },
  {
    path: '',
    name: 'Not Found',
    icon: 'close-circle',
    component: NotFound,
  },
];

export default mainRoutes;
