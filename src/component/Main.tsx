import React from "react";
import { Link } from "react-router-dom";
import { LItem, MainSection, Ulist } from "./styled/Main.style";

const Main = () => {
    return (
        <MainSection>
            <Ulist>
                <LItem><Link to={"/cp"}>CorsProxy</Link></LItem>
                <LItem><Link to={"/lazy"}>LazyLoading</Link></LItem>
                <LItem><Link to={"/StyleTS"}>StyleTS</Link></LItem>
            </Ulist>
        </MainSection>
    );
};

export default Main;
