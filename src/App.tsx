import { GlobalStyles } from "./components/styles/GlobalStyles";
import { useState, createContext } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Planets from "./components/Pages/Planets";
import data from "./data.json";
import Home from "./components/Pages/Home";

export const activeContext = createContext<string | null>(null);

function App() {
  const [activePage, setActivePage] = useState("");

  return (
    <>
      <GlobalStyles />
      <main>
        <Header setActivePage={setActivePage} activePage={activePage} />
        <activeContext.Provider value={activePage}>
          <Routes>
          <Route path="/" index element={<Home />} />
          {data.map((planet) => (
            <Route path={planet.name} key={planet.name} element={<Planets />} />
          ))}
          </Routes>
        </activeContext.Provider>
      </main>
    </>
  );
}

export default App;
