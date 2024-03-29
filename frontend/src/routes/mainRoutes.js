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
  HomeOutlined,
  LoginOutlined,
  UserOutlined,
  UserAddOutlined,
  EditOutlined,
  MedicineBoxOutlined,
  DollarOutlined,
  SettingOutlined,
  FolderOutlined,
} from '@ant-design/icons';
import IngresarPaciente from 'containers/Paciente/Ingresar';

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
    exact: true,
    path: '/paciente',
    name: 'Pacientes',
    icon: <UserOutlined />,
    component: Paciente,
    auth: true,
    permission: 'admin',
    children: [
      {
        path: '/paciente/ingresar',
        name: 'Ingresar',
        icon: <UserAddOutlined />,
        component: IngresarPaciente,
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
    path: '/paciente/ingresar',
    name: 'Ingresar',
    icon: <UserAddOutlined />,
    component: IngresarPaciente,
    auth: true,
    permission: 'admin',
    hideOnMenu: true
  },
  {
    path: '/paciente/editar',
    name: 'Editar',
    icon: <EditOutlined />,
    component: SignIn,
    auth: true,
    permission: 'admin',
    hideOnMenu: true
  },
  {
    path: '/agenda',
    name: 'Agenda',
    icon: <CalendarOutlined />,
    component: Agenda,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/expediente',
    name: 'Expediente',
    icon: <MedicineBoxOutlined />,
    component: Agenda,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/consulta',
    name: 'Consulta',
    icon: <FolderOutlined />,
    component: Agenda,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/factura',
    name: 'Facturación',
    icon: <DollarOutlined />,
    component: Factura,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/reporte',
    name: 'Reportes',
    icon: <BarChartOutlined />,
    component: Reporte,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    icon: <SettingOutlined />,
    component: Reporte,
    auth: true,
    permission: 'admin',
  },
  {
    path: '',
    name: 'Not Found',
    icon: <CloseCircleOutlined />,
    component: NotFound,
    auth: true,
    permission: 'admin',
  },
];

export default mainRoutes;
