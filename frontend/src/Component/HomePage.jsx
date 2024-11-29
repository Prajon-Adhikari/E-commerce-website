import { React } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Item from "./Item";
import SideBar from "./SideBar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Item />
      <Footer />
      <SideBar />
    </div>
  );
}
