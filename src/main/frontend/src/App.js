import Header from "./components/Header/Header";
import MainWeather from "./components/MainWeather/MainWeather";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Fetch from "./Fetch";
import Section from "./components/shared/Section/Section";

function App() {
  return (
    <div className={styles.app}>
      {/* <Fetch /> */}
      <Header />
      <div className={styles.container}>
        <Section>
          <MainWeather />
          <MainWeather />
          <MainWeather />
          <MainWeather />
          <MainWeather />
          <MainWeather />
        </Section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
