import { Suspense, useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Shared/Content/Content";
import Footer from "./components/Footer/Footer";
import ModalContent from "./components/Modal/ModalContent";
import useFetch from "./hooks/useFetch";
// import Fetch from "./fetch";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState(
    localStorage.getItem("location")
      ? localStorage.getItem("location")
      : "충청남도 아산시 모종동"
  );

  const { data, loading } = useFetch("location", location);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header
        location={location}
        isOpen={isOpen}
        onOpenModal={() => setIsOpen(true)}
      />
      {loading && <p>Somthing is wrong 😖</p>}
      {data && (
        <div className="flex flex-col items-center w-full overflow-hidden overflow-y-auto">
          <Content />
          <Footer />
          {isOpen && (
            <ModalContent
              onCloseModal={() => setIsOpen(false)}
              setLocation={setLocation}
            />
          )}
        </div>
      )}{" "}
      {/* <Fetch /> */}
    </div>
  );
}

export default App;
