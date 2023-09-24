import styled from "styled-components";

export const Aside = styled.aside<{ $isVisible?: boolean }>`
    padding-top: 30px;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 750px) {
        position: absolute;
        top: 0;
        left: ${({ $isVisible }) => ($isVisible ? "0" : "-100%")};
        z-index: 10;

        height: 100%;
        padding-left: 40px;
        padding-right: 20px;

        background-color: ${({ theme }) => theme.backgroundColors.sidebar};
        box-shadow: 1px 0px 21px 0px ${({ theme }) => theme.shadowColor};
    }

    transition: left 0.4s linear;
`;

export const Row = styled.div`
    margin-top: 50px;
    margin-bottom: 15px;

    display: flex;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

export const Title = styled.p`
    font-weight: 600;
    font-size: 15px;

    color: ${({ theme }) => theme.textColor};
`;

export const SubTitle = styled.p`
    font-size: 14px;

    color: ${({ theme }) => theme.textColor};
`;

export const Avatar = styled.img`
    width: 45px;
    height: 45px;

    @media screen and (max-width: 750px) {
        display: none;
    }
`;

export const Span = styled.span`
    position: relative;

    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;

    background-color: #cdcdcd;
    border-radius: 3px;

    z-index: 11;
    transform-origin: 4px 0px;
    transition:
        transform 0.5s linear,
        opacity 0.55s linear;

    @media screen and (max-width: 550px) {
        width: 25px;
        height: 3px;
    }
`;

export const Burger = styled.div<{ $isVisible?: boolean }>`
    height: fit-content;
    padding-top: 35px;

    display: none;
    position: relative;
    top: 0;
    right: 0;
    z-index: 11;

    cursor: pointer;

    ${Span}.first {
        transform-origin: 0% 0%;
    }

    ${Span}.third {
        transform-origin: 0% 100%;
    }

    ${Span}.first {
        opacity: ${({ $isVisible }) => $isVisible && "1"};
        transform: ${({ $isVisible }) => $isVisible && "rotate(45deg) translate(-1px, -4px)"};
    }

    ${Span}.second {
        opacity: ${({ $isVisible }) => $isVisible && "0"};
        transform: ${({ $isVisible }) => $isVisible && "rotate(0deg) scale(0.2, 0.2)"};
    }

    ${Span}.third {
        opacity: ${({ $isVisible }) => $isVisible && "1"};
        transform: ${({ $isVisible }) => $isVisible && "rotate(-45deg) translate(0, 0px)"};
    }

    @media screen and (max-width: 750px) {
        display: block;
    }
`;
