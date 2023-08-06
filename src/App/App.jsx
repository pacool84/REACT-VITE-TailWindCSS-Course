import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../Context";
import "./App.css";
import Home from "../Home/index";
import MyAccount from "../MyAccount/index";
import MyOrder from "../MyOrder/index";
import MyOrders from "../MyOrders/index";
import NotFound from "../NotFound/index";
import SignIn from "../SignIn/index";
import NavBar from "../Components/NavBar";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
