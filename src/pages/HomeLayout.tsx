import { Outlet } from "react-router-dom";
import { Header, Footer, Navbar } from "@/components";

const HomeLayout = () => {
  return (
    <>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </>
  ) ;
};

export default HomeLayout;