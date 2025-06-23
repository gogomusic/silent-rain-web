import React from "react";
import Navbar from "./components/nav-bar";

const layout = async ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
