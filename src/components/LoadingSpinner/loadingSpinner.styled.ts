import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.backgroundColor};
`;

export const Ring = styled.div`
    width: 200px;
    height: 200px;

    text-align: center;
    font-size: 20px;
    letter-spacing: 4px;
    text-transform: uppercase;
    line-height: 190px;

    background: transparent;
    border: 3px solid ${({ theme }) => theme.backgroundColors.blue};
    border-radius: 50%;

    color: ${({ theme }) => theme.fontColors.blue};
`;

const circleAnimation = keyframes`
    0% {
        transform: rotate(45deg);
    }
    100% {
        transform: rotate(405deg);
    }
`;

export const Span = styled.span`
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;

    width: 50%;
    height: 4px;

    display: block;

    background: transparent;

    transform-origin: left;
    animation: ${circleAnimation} 2s linear infinite;

    &:before {
        content: "";
        position: absolute;
        top: -6px;
        right: -8px;

        width: 16px;
        height: 16px;

        border-radius: 50%;
        background: ${({ theme }) => theme.backgroundColors.blue};

        box-shadow: 0 0 20px ${({ theme }) => theme.backgroundColors.blue};
    }
`;
