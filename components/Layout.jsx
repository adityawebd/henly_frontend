import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout({ children }) {

  return (
    <>
      <div className="">
        <Navbar />
        <div>
          {children}
        </div>
      </div>
    </>
  );
}
