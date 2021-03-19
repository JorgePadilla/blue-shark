import React from 'react';
import Board from 'containers/Board';
import SignIn from 'containers/SignIn';
import NotFound from 'containers/NotFound';
import Agenda from 'containers/Agenda';
import Paciente from 'containers/Paciente';
import Factura from 'containers/Factura';
import Reporte from 'containers/Reporte';
import {
  BarChartOutlined,
  CalendarOutlined,
  CloseCircleOutlined,
  ForkOutlined,
  HomeOutlined,
  LoginOutlined,
  UserOutlined,
  UserAddOutlined,
  EditOutlined,
} from '@ant-design/icons';

const mainRoutes = [
  {
    exact: true,
    path: '/',
    name: 'Home',
    icon: <HomeOutlined />,
    component: Board,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/signin',
    name: 'Sign In',
    icon: <LoginOutlined />,
    component: SignIn,
  },
  {
    path: '/paciente',
    name: 'Pacientes',
    icon: <UserOutlined />,
    component: Paciente,
    sub: [
      {
        path: '/paciente/ingresar',
        name: 'Ingresar',
        icon: <UserAddOutlined />,
        component: SignIn,
        auth: true,
        permission: 'admin',
      },
      {
        path: '/paciente/editar',
        name: 'Editar',
        icon: <EditOutlined />,
        component: SignIn,
        auth: true,
        permission: 'admin',
      },
    ],
  },
  {
    path: '/agenda',
    name: 'Agenda',
    icon: <CalendarOutlined />,
    component: Agenda,
  },
  {
    path: '/factura',
    name: 'Facturación',
    icon: <ForkOutlined />,
    component: Factura,
  },
  {
    path: '/reporte',
    name: 'Reportes',
    icon: <BarChartOutlined />,
    component: Reporte,
  },
  {
    path: '',
    name: 'Not Found',
    icon: <CloseCircleOutlined />,
    component: NotFound,
  },
];

export default mainRoutes;
