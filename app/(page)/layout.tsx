import React from "react";
import Navbar from "@/components/layout/nav-bar";
// import CloudMusic from "@/components/cloud-music";

const layout = async ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <CloudMusic /> */}
    </>
  );
};

export default layout;
