import { GlobalStyles } from "./components/styles/GlobalStyles";
import { useState, createContext } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Planets from "./components/Planets";
import data from "./../data.json";
import Home from "./components/Home";

export const activeContext = createContext<string | null>(null);

function App() {
  const [activePage, setActivePage] = useState("Mercury");

  return (
    <>
      <GlobalStyles />
      <>
        <Header setActivePage={setActivePage} activePage={activePage} />
        <activeContext.Provider value={activePage}>
          <Routes>
            <Route index element={<Home />} />
            {data.map((planet) => (
              <Route
                path={`${planet.name}`}
                key={planet.name}
                element={<Planets />}
              />
            ))}
          </Routes>
        </activeContext.Provider>
      </>
    </>
  );
}

export default App;
