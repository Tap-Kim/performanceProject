import React from "react";
import { Link } from "react-router-dom";
import { LItem, MainSection, Ulist } from "./styled/Main.style";

const Main = () => {
    return (
        <MainSection>
            <Ulist>
                <Link to={"/cp"}><LItem>CorsProxy</LItem></Link>
                <Link to={"/lazy"}><LItem>LazyLoading</LItem></Link>
                <Link to={"/StyleTS"}><LItem>StyleTS</LItem></Link>
                <Link to={"/recoil"}><LItem>Recoil</LItem></Link>
                <Link to={"/infinite"}><LItem>InfiniteScroll</LItem></Link>
            </Ulist>
        </MainSection>
    );
};

export default Main;
