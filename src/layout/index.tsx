import React from "react";
import Header from "./header";

type ChildrenProps = {
  children: any
}
const Layout = ({ children }: ChildrenProps) => {

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
