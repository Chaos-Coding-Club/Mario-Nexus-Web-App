import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import type {ReactNode} from 'react';

type LayoutProps = {children?: ReactNode}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar></Navbar>
      {props.children}
      <Footer></Footer>
    </>
  );
};
  
export default Layout;