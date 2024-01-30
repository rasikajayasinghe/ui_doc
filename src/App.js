import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import publicRoutes from "./routes/PublicRoutes";
import "./assets/css/remixicon.css";
import "./scss/style.scss";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            {publicRoutes.map((route, index) => {
              return (
                <Route path={route.path} element={route.element} key={index} />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
