import React from "react";
import { Outlet } from "react-router";
import ProFooter from "../../ProComponents/ProSharedItems/Footer/ProFooter";
import ProNavbar from "../../ProComponents/ProSharedItems/Navbar/ProNavbar";

const ProLayout = () => {
  return (
    <div>
      <header className="sticky z-50 top-0">
        <ProNavbar></ProNavbar>
      </header>
      <Outlet></Outlet>
      <footer>
        <ProFooter></ProFooter>
      </footer>
    </div>
  );
};

export default ProLayout;
