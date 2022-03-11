import React, { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { _customNum, _num, _selectorNum } from "../modules/recoil/numberRecoil";

const RecoilComponent: FC = (): JSX.Element => {
    // 1. basic 방법
    // const [num, setNum] = useRecoilState<number>(_num); // getter/setter 동시에 가져옴
    // const onClickIncrease = () => {
    //     setNum(num + 1);
    // }
    // const onClickDecrease = () => {
    //     setNum(num - 1);
    // }

    // 2. 커스텀 방법
    // const { num, increase, decrease } = _customNum(); // recoil 커스텀

    // 3. selector 활용
    const num = useRecoilValue<number>(_num);
    const [selectorNum, setSelectorNum] = useRecoilState<number>(_selectorNum);

    // return (
    //     <div>
    //         <p>현재 값: {num}</p>
    //         <BUTTON onClick={increase}>+</BUTTON>
    //         <BUTTON onClick={decrease}>-</BUTTON>
    //     </div>);

    return (
        <div>
            <p>현재 값: {num}</p>
            <p>현재 selector 값: {selectorNum}</p>
            <BUTTON onClick={() => setSelectorNum(1)}>+</BUTTON>
            <BUTTON onClick={() => setSelectorNum(-1)}>-</BUTTON>
        </div>
    );
};

export default RecoilComponent;

export const BUTTON = styled.button`
    font: bold 1.25rem/1 poppins;
    color: #71DFBE;
    top: 50%;
    left: 0;
    right: 0;
    background: #2B2D2F;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 4px;
`