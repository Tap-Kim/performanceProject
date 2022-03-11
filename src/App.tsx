import React, { FC, lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter, Router, Navigate } from 'react-router-dom'
import CorsProxy from "./component/CorsProxy";
import Main from "./component/Main";
import LazyLoading from "./component/LazyLoading";
import NotFound from "./component/NotFound";
import StyleTS from "./component/StyleTS";
import MainContainer from "./component/MainContainer";

const LazyHello = lazy(() => import(/*webpackChunkName: "LazyHello"*/ './lazy/LazyHello'));

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Suspense fallback={LazyHello}>
          <Routes>
            <Route path="/" element={<Navigate to={"/main"} replace />} />
            <Route path="/main" element={<Main />} />
            <Route path="/cp" element={<CorsProxy />} />
            <Route path="/lazy" element={<LazyLoading />} />
            <Route path="/StyleTS" element={<StyleTS />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainContainer>
    </BrowserRouter>
  );
};

export default App;