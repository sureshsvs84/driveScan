// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Insurance from "../components/appComponent/Insurance";
import CustomerInformation from "../components/appComponent/customerInformation";
import Order from "../components/appComponent/order";
import VehicleCheckin from "../components/appComponent/vehicleCheckin";
import VehicleCondition from "../components/appComponent/vehicleCondition";
const mainRoutes = [
  {
    path: "/customerInfo",
    sidebarName: "Customer Info",
    navbarName: "Customer Profile",
    icon: Dashboard,
    component: CustomerInformation
  },
  {
    path: "/order",
    sidebarName: "Order",
    navbarName: "Order Info",
    icon: Dashboard,
    component: Order
  },
  {
    path: "/insurance",
    sidebarName: "Insurance",
    navbarName: "Insurance Profile",
    icon: Dashboard,
    component: Insurance
  },
  {
    path: "/vehicleCheckin",
    sidebarName: "Vehicle Check-In",
    navbarName: "Vehicle Check-In",
    icon: Dashboard,
    component: VehicleCheckin
  },
  {
    path: "/vehicleCondition",
    sidebarName: "Vehicle Condition",
    navbarName: "Vehicle Condition",
    icon: Dashboard,
    component: VehicleCondition
  },
  { redirect: true, path: "/", to: "/customerInfo", navbarName: "Redirect" }
];

export default mainRoutes;
