import React, { useContext } from "react";
import { Header } from "./components/Header";
import { store } from "./store/store";
import { Coffees } from "./components/Coffees";

export function App() {
  const { state, dispatch } = useContext(store);
  return (
    <div>
      <Header />
      <Coffees />
      {/* <AdditionalTable />
      <ServingVariants /> */}
    </div>
  );
}
