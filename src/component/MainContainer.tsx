import React from "react";
import { Link } from "react-router-dom";
import { HeaderBtn, MainContainerDiv, MainContainerHeader } from "../styled/StyledMain";

interface ChildrenInterface {
    children: JSX.Element
}
const MainContainer = ({ children }: ChildrenInterface) => {
    return (
        <MainContainerDiv>
            <MainContainerHeader>
                <Link to="/">
                    <HeaderBtn>
                        Back
                    </HeaderBtn>
                </Link>
            </MainContainerHeader>
            {children}
        </MainContainerDiv>
    );
};

export default MainContainer;
