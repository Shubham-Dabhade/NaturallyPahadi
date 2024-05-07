import { useEffect } from "react";
import "./App.css";
import "./fonts/ArgestaText-Regular.otf";
import "./fonts/bould-light-webfont.ttf";
import Home from "./pages/Home/Home";
import Lenis from "lenis";

function App() {
  // useEffect( () => {
  //   const lenis = new Lenis()

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // })

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return <Home />;
}

export default App;
