import { useRef, useEffect } from "react";
import Header from "./components/Header/Header";
import Weather from "./pages/weather/Weather";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const ref = useRef(null);
  let height = "";

  useEffect(() => {
    if (!ref.current) return;
    height = ref.current.getBoundingClientRect().height - 196 + "px";
    // console.log(height);
  }, []);

  return (
    <div className="app" ref={ref}>
      <Header />
      {/* <Weather height={height} /> */}
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
