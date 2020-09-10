import React from "react";
import { Header } from "./components/Header";
import { Terminal } from "./components/Terminal";
import { TableOrders } from "./components/TableOrders";

export function App() {
  return (
    <>
      <Header />
      <TableOrders />
      <Terminal />
    </>
  );
}
