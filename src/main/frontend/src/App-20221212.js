import { useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Shared/Content/Content";
import Footer from "./components/Footer/Footer";
import ModalContent from "./components/Modal/ModalContent";
import { useLocationContext } from "./contexts/LocationContext";
import useLocation from "./hooks/useLocation";
// import Fetch from "./fetch";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { location } = useLocationContext();

  const { locationQuery } = useLocation(location);
  const { error, status, isSuccess } = locationQuery;
  // console.log(isSuccess, error);

  // const error = false;
  // const isSuccess = true;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header isOpen={isOpen} onOpenModal={() => setIsOpen(true)} />
      {error && <p>Somthing is wrong 😖 : {status}</p>}
      {isSuccess && (
        <div className="flex flex-col items-center w-full overflow-hidden overflow-y-auto">
          <Content />
          <Footer />
          {isOpen && <ModalContent onCloseModal={() => setIsOpen(false)} />}
        </div>
      )}{" "}
      {/* <Fetch /> */}
    </div>
  );
}

export default App;
