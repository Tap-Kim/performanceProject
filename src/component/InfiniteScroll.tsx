import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InfiniteScrollTestDat } from "../static/testData";

interface Info {
    name: string, phone: string, age: number
}

const InfiniteScroll: FC = (): JSX.Element => {
    const [infoArr, setInfoArr] = useState<Info[]>([]);
    const observerRef = useRef<IntersectionObserver>();
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getInfo();
    }, []);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(intersectionObserver);
        boxRef.current && observerRef.current.observe(boxRef.current);
    }, [infoArr]);

    const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // 관찰중인 entry가 화면에 보여지는 경우
                io.unobserve(entry.target); //entry 관찰 해제
                getInfo();
            }
        });
    }

    const getInfo = async () => {
        const res = InfiniteScrollTestDat;
        setInfoArr(cur => [...cur, ...res]);
    }

    return (
        <Wrapper>
            {
                infoArr.map((info, i) => {
                    if (infoArr.length - 5 === i) {
                        return (
                            <Box ref={boxRef} key={i}>
                                <Item {...info} />
                            </Box>
                        )
                    } else {
                        return (
                            <Box key={i}>
                                <Item {...info} />
                            </Box>
                        )
                    }
                })
            }
        </Wrapper>
    );
};

export default InfiniteScroll;

const Item = ({ name, phone, age }: Info) => (
    <BoxTable>
        <tbody>
            <tr>
                <Title>이름</Title>
                <td>{name}</td>
            </tr>
            <tr>
                <Title>번호</Title>
                <td>{phone}</td>
            </tr>
            <tr>
                <Title>나이</Title>
                <td>{age}</td>
            </tr>
        </tbody>
    </BoxTable>
);

const Wrapper = styled.section`
    width: 800px;
    margin: 0 auto;
`
const Box = styled.div`
    border: 1px solid olive;
    border-radius: 8px;
    box-shadow: 1px 1px 2px olive;
    margin: 18px 0;
`
const BoxTable = styled.table`
    border-spacing: 15px;
`
const Title = styled.td`
    font-weight: 700;
`