import GlobalStyle from "./style/GlobalStyle";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Routes } from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Routes />
    </>
  );
}

export default App;
