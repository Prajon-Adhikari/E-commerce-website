import { React } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Item from "./Item";


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Item />
      <Footer />
    </div>
  );
}
