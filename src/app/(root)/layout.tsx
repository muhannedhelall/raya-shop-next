'use client';
import { Fragment, useState } from "react";

import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <Navbar setShow={setShow} />
      {!show &&
        <>
          <main className="container-fluid">{children}</main>
          <Footer />
        </>
      }
    </Fragment>
  );
}
