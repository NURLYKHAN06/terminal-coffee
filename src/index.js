import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { StateProvider } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<p>Загрузка...</p>}>
      <StateProvider>
        <App />
      </StateProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
