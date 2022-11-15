import Header from "./components/Header/Header";
import Weather from "./pages/weather/Weather";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
