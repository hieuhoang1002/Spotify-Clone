import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Main from "../../pages/Main";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <Sidebar />
      <Footer />
      <Outlet />
    </Fragment>
  );
};
export default Home;
