import React, { FC, lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter, Router, Navigate } from 'react-router-dom'
import CorsProxy from "@comp/CorsProxy";
import Main from "@comp/Main";
import LazyLoading from "@comp/LazyLoading";
import NotFound from "@comp/NotFound";
import StyleTS from "@comp/StyleTS";
import MainContainer from "@comp/MainContainer";
import './App.css';
import RecoilComponent from "@comp/RecoilComponent";
import InfiniteScroll from "@comp/InfiniteScroll";
import Prefix from "@comp/Prefix";
import Kurly from "@comp/Kurly";


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