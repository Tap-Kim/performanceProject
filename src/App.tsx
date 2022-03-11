import React, { FC, lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter, Router, Navigate } from 'react-router-dom'
import CorsProxy from "./component/CorsProxy";
import Hello from "./component/Hello";
import LazyLoading from "./component/LazyLoading";
import NotFound from "./component/NotFound";
import StyleTS from "./component/StyleTS";

const LazyHello = lazy(() => import(/*webpackChunkName: "LazyHello"*/ './lazy/LazyHello'));

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={LazyHello}>
        <Routes>
          <Route path="/" element={<Navigate to={"/hello"} replace />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/cp" element={<CorsProxy />} />
          <Route path="/lazy" element={<LazyLoading />} />
          <Route path="/StyleTS" element={<StyleTS />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;