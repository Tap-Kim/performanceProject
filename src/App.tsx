import React, { FC, lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter, Router, Navigate } from 'react-router-dom'
import CorsProxy from "./component/CorsProxy";
import Main from "./component/Main";
import LazyLoading from "./component/LazyLoading";
import NotFound from "./component/NotFound";
import StyleTS from "./component/StyleTS";
import MainContainer from "./component/MainContainer";
import './App.css';
import RecoilComponent from "./component/RecoilComponent";
import InfiniteScroll from "./component/InfiniteScroll";
import Prefix from "./component/Prefix";
import Kurly from "./component/Kurly";


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
            <Route path="/recoil" element={<RecoilComponent />} />
            <Route path="/infinite" element={<InfiniteScroll />} />
            <Route path="/prefix" element={<Prefix />} />
            <Route path="/kurly" element={<Kurly />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainContainer>
    </BrowserRouter>
  );
};

export default App;