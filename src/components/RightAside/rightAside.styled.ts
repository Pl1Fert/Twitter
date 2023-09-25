import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`;

export const SearchBar = styled.input`
    padding: 15px 0;
    padding-left: 50px;
    width: 100%;

    outline: none;
    border: none;

    border-radius: 22px;
    background-color: ${({ theme }) => theme.input.backgroundColor.search};
    color: ${({ theme }) => theme.input.textColor.primary};

    font: inherit;
    font-size: ${({ theme }) => theme.fontSize.f18};

    &::placeholder {
        font: inherit;
        font-size: ${({ theme }) => theme.fontSize.f18};

        color: ${({ theme }) => theme.input.placeholder.primary};
    }

    @media screen and (max-width: 1000px) {
        background-color: "#589FEC";
    }
`;

export const Icon = styled.img`
    position: absolute;
    left: 5%;
    top: 50%;

    transform: translateY(-50%);
`;

export const Title = styled.p`
    padding: 20px 0;
    color: ${({ theme }) => theme.textColor};

    font-size: ${({ theme }) => theme.fontSize.f20};
`;

export const Span = styled.span`
    position: relative;

    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;

    background-color: #cdcdcd;
    border-radius: 3px;

    z-index: 1;
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

    @media screen and (max-width: 1000px) {
        display: block;
    }
`;

export const Aside = styled.aside<{ $isVisible?: boolean }>`
    padding-top: 30px;

    @media screen and (max-width: 1000px) {
        position: absolute;
        top: 0;
        right: ${({ $isVisible }) => ($isVisible ? "0" : "-100%")};
        z-index: 10;

        height: 100%;
        padding: 70px 20px;

        background-color: ${({ theme }) => theme.backgroundColors.sidebar};
        box-shadow: -1px 0px 21px 0px ${({ theme }) => theme.shadowColor};
    }

    transition: right 0.4s linear;
`;

export const CloseOutside = styled.div<{ $isVisible?: boolean }>`
    display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;

    z-index: 9;
`;
