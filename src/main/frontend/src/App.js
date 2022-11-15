import Header from "./components/Header/Header";
import Weather from "./pages/weather/Weather";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Fetch from "./Fetch";

function App() {
  return (
    <div className={styles.app}>
      <Fetch />
      {/* <Header />
      <div className={styles.content}>
        <Weather />
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
