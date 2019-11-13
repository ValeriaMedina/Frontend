/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import UpgradeToPro from "views/Upgrade.jsx";
import Dashboard from "views/Dashboard.jsx";
import Perfil from "views/Perfil.jsx";
import Adeudo from "views/Adeudo.jsx";
import Pago from "views/Pago.jsx";
import Calendario from "views/calendario.jsx";
import Noticias from "views/Noticias.jsx";
import PaseVisitantes from "views/PaseVisitantes.jsx";
import Emergencia from "views/Emergencia.jsx";
import HomeAlone from "views/HomeAlone.jsx";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/Perfil",
    name: "Perfil",
    icon: "nc-icon nc-single-02",
    component: Perfil,
    layout: "/admin"
  },
  {
    path: "/Adeudo",
    name: "Adeudo",
    icon: "nc-icon nc-bell-55",
    component: Adeudo,
    layout: "/admin"
  },
  {
    path: "/Pago",
    name: "Pago en linea",
    icon: "nc-icon nc-credit-card",
    component: Pago,
    layout: "/admin"
  },
  {
    path: "/Calendario",
    name: "Calendario Terraza",
    icon: "nc-icon nc-calendar-60",
    component: Calendario,
    layout: "/admin"
  },
  {
    path: "/Noticias",
    name: "Noticias",
    icon: "nc-icon nc-world-2",
    component: Noticias,
    layout: "/admin"
  },
  {
    path: "/PaseVisitantes",
    name: "Pase Visitantes",
    icon: "nc-icon nc-badge",
    component: PaseVisitantes,
    layout: "/admin"
  },
  {
    path: "/Emergencia",
    name: "Boton de Emergencia",
    icon: "nc-icon nc-badge",
    component: Emergencia,
    layout: "/admin"
  },

  {
    pro: true,
    path: "/HomeAlone",
    name: "Home Alone-Premium",
    icon: "nc-icon nc-camera-compact",
    component: HomeAlone,
    layout: "/admin"
  }
];
export default routes;
