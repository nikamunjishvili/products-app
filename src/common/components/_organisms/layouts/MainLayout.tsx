import React from "react";
import { Header, Navbar } from "../../_molecules";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar/>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
