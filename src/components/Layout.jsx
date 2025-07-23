import { Outlet } from "react-router-dom";
import Header from "../components/Header"

function Layout() {
  return (
    <>
      {/* If you want Header on all pages, keep it here */}
      <Header/>
      {/* Render child route components */}
      <Outlet />
    </>
  );
}

export default Layout;
