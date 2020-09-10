import React, { useContext } from "react";
import { Header } from "./components/Header";
import { store } from "./store/store";
import { Coffees } from "./components/Coffees";
import { TableOrders } from "./components/TableOrders";

export function App() {
  return (
    <div>
      <Header />
      <TableOrders />
      <Coffees />
      {/* <AdditionalTable />
      <ServingVariants /> */}
    </div>
  );
}
