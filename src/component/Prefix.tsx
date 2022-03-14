import React from "react";
import styled from "styled-components";
import { OuterStyled } from "./styled/prefix/styled";
import './styled/prefix/style.scss';
import './styled/prefix/style.css';

const Prefix = (): JSX.Element => {
    const InnerStyled = styled.div`
        display: flex;

        margin: 40px 0;
    `

    return (
        <div>
            {/* css, scss 클래스로 걸어둔 아이들은 스타일이 걸리지 않음 */}
            <div className='css'>
                <h3>Css</h3>
            </div>

            <div className='scss'>
                <h3>Scss</h3>
            </div>

            <InnerStyled>
                <h3>InnerStyled</h3>
            </InnerStyled>

            <OuterStyled>
                <h3>OuterStyled</h3>
            </OuterStyled>

            <div style={{ display: 'flex', margin: '40px 0' }}>
                <h3>Self</h3>
            </div>
        </div>
    );
};

export default Prefix;
