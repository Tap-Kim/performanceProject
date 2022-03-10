import React, { FC } from "react";
import { Routes, Route, BrowserRouter, Router, Navigate } from 'react-router-dom'
import CorsProxy from "./component/CorsProxy";
import Hello from "./component/Hello";
import LazyLoading from "./component/LazyLoading";
import NotFound from "./component/NotFound";
import kakaoFriends from './image/kakaoFriends.png'

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/hello"} replace />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/cp" element={<CorsProxy />} />
        <Route path="/lazy" element={[...Array(1000)].map((val, index) => <LazyLoading key={index} src={kakaoFriends} />)} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;