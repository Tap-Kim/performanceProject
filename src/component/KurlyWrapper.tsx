import React from "react";
import styled from "styled-components";
import arrowroot from '../../assets/img/arrowroot.jpg';
import milk from '../../assets/img/milk.jpg';
import tofu from '../../assets/img/tofu.jpg';

const KurlyWrapper = () => {
    return (
        <Wrapper>
            <Header>
                <Navbar.Container>
                    <Navbar.MenuList>
                        <Navbar.Menu>
                            <Navbar.MenuText>전체 카테고리</Navbar.MenuText>
                        </Navbar.Menu>

                        <Navbar.Menu>
                            <Navbar.MenuText>신상품</Navbar.MenuText>
                        </Navbar.Menu>

                        <Navbar.Menu>
                            <Navbar.MenuText>베스트</Navbar.MenuText>
                        </Navbar.Menu>

                        <Navbar.Menu>
                            <Navbar.MenuText>알뜰쇼핑</Navbar.MenuText>
                        </Navbar.Menu>

                        <Navbar.Menu>
                            <Navbar.MenuText>특가/혜택</Navbar.MenuText>
                        </Navbar.Menu>
                    </Navbar.MenuList>
                </Navbar.Container>

                <Banner.Container image={arrowroot}>
                    <Banner.ArrowList>
                        <Banner.Icon className="fa-solid fa-arrow-left"></Banner.Icon>
                        <Banner.Icon className="fa-solid fa-arrow-right"></Banner.Icon>
                    </Banner.ArrowList>
                </Banner.Container>
            </Header>

            <Body>
                <Item.Container>
                    <Item.Header>
                        <Item.TitleText>이 상품은 어때요?</Item.TitleText>
                    </Item.Header>

                    <Item.Body>
                        <Item.ItemList>
                            <Item.Item>
                                <Item.ItemImageContainer>
                                    <Item.ItemImage src={tofu} />
                                </Item.ItemImageContainer>
                                <Item.ItemText>[콜린스그린] 더 오렌지 1000mL</Item.ItemText>
                                <Item.ItemSaleText>20%</Item.ItemSaleText>
                                <Item.ItemPriceText>14,080원</Item.ItemPriceText>
                            </Item.Item>

                            <Item.Item>
                                <Item.ItemImageContainer>
                                    <Item.ItemImage src={milk} />
                                </Item.ItemImageContainer>
                                <Item.ItemText>[한애가]] 담금초 칡 350mL</Item.ItemText>
                                <Item.ItemSaleText>30%</Item.ItemSaleText>
                                <Item.ItemPriceText>23,800원</Item.ItemPriceText>
                            </Item.Item>
                        </Item.ItemList>
                    </Item.Body>
                </Item.Container>
            </Body>
        </Wrapper>
    )
}

export default KurlyWrapper;


const Wrapper = styled.div``;

const Header = styled.header``

const Navbar = {
    Container: styled.div`
        max-width: 1024px;

        margin: 0 auto;

        height: 60px;
    `,

    MenuList: styled.ul`
        width: 100%;
        height: 100%;

        display: flex;
    `,

    Menu: styled.li`
        height: 100%;

        display: flex;
        align-items: center;

        margin: 0 16px;

        cursor: pointer;
    `,

    MenuText: styled.h3`
        font-weight: 700;
        font-size: 18px;
    `,
}

const Banner = {
    Container: styled.div<{ image: string }>`
        position: relative;

        background-image: ${(props) => `url(${props.image})`};
        background-repeat: no-repeat;
        background-position: center;

        height: 360px;
    `,

    ArrowList: styled.div`
        position: absolute;
        top: 0;

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
    `,

    Icon: styled.i`
        font: normal normal normal 14px/1 FontAwesome;
        font-size: 36px;

        margin: 0 18px;

        opacity: 0.4;
    `
}

const Body = styled.div``;

const Item = {
    Container: styled.div`
        max-width: 1024px;

        margin: 64px auto;
    `,

    Header: styled.header`
        text-align: center;

        padding: 20px 0;
    `,

    Body: styled.div`
        margin-top: 22px;
    `,

    ItemList: styled.div`
        display: flex;
    `,

    Item: styled.div`
        margin: 0 12px;
    `,

    ItemImageContainer: styled.div`
        width: 240px;

        cursor: pointer;

        overflow: hidden;
    `,

    ItemImage: styled.img`
        width: 100%;

        &:hover {
            transform: scale(1.06);

            transition: .3s ease-out;
        }
    `,

    TitleText: styled.h2`
        font-weight: 700;
        font-size: 32px;
    `,

    ItemText: styled.h4`
        margin: 14px 0;
    `,

    ItemSaleText: styled.span`
        font-weight: 700;
        color: ${(props) => props.theme.saleColor};

        margin-right: 18px;
    `,

    ItemPriceText: styled.span`
        font-weight: 700;
    `,
};
