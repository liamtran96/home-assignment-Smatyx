import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EventProvider } from "./context/event-context.jsx";
import { StateProvider } from "./context/state-context.jsx";
import { ModalContent } from "./components/Modal.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <EventProvider>
        <StateProvider>
          <App />
          <ModalContent />
          <ToastContainer className="text-sm" />
        </StateProvider>
      </EventProvider>
    </BrowserRouter>
  </React.StrictMode>
);
