import { RouterProvider } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import TaskPilotRoute from "./routes";
import ToasterProvider from "./providers/ToasterProvider";
import { Provider } from "react-redux";
import "./assets/css/style.css";
import store from "./store";

export const HeaderTextContext = createContext();

function App() {
  const [headerText, setHeaderText] = useState("");
  return (
    <HeaderTextContext.Provider value={{ headerText, setHeaderText }}>
      <Provider store={store}>
        <RouterProvider router={TaskPilotRoute} />
      </Provider>
      <ToasterProvider />
    </HeaderTextContext.Provider>
  );
}

export const useTitle = () => {
  return useContext(HeaderTextContext);
};

export default App;
