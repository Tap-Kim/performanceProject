import React, { FC } from "react";
import { StyledMainDiv, StyledMainP } from "../styled/StyledMain";


const StyleTS: FC = (): JSX.Element => {
    // Done in 10.62s. > tree shaking 미적용
    // Done in 7.25s.  > tree shaking 적용
    return (<section>
        <StyledMainDiv>
            <StyledMainP>Style Tree Shaking...</StyledMainP>
        </StyledMainDiv>
    </section>);
};

export default StyleTS;
