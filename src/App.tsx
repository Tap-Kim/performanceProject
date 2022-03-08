import React, { FC } from "react";
import CorsProxy from "./component/CorsProxy";
import LazyLoading from "./component/LazyLoading";
import kakaoFriends from './image/kakaoFriends.png';

const App: FC = (): JSX.Element => {
  return (
    <div>
      <CorsProxy />
      {[...Array(1000)].map((val, index) => <LazyLoading key={index} src={kakaoFriends} />)}
    </div>);
};

export default App;