import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Intro from "./components/intro";
import Contact from "./components/contact";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
  <div className="mx-auto px-4 lg:px-44 bg-white " >
      <Header  />
      <Intro />
      <Contact />
      <About  />
      <Footer />
      </div>
  );
}
