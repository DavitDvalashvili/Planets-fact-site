import { GlobalStyles } from "./components/styles/GlobalStyles";
import { useState, createContext } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Planets from "./components/Planets";
import data from "./data.json";

export const activeContext = createContext<string | null>(null);

function App() {
  const [activePage, setActivePage] = useState("");

  return (
    <>
      <GlobalStyles />
      <>
        <Header setActivePage={setActivePage} activePage={activePage} />
        <activeContext.Provider value={activePage}>
          <Routes>
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
