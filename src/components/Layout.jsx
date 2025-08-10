import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      {/* If you want Header on all pages, keep it here */}
      <Header/>
      {/* Render child route components */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
