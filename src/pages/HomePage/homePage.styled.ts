import { Link } from "react-router-dom";
import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 40px;

    @media (max-width: 1050px) {
        align-items: center;
    }
`;

export const Wrapper = styled.section`
    height: 100%;

    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
`;

export const Column = styled.div`
    padding-top: 160px;

    display: flex;
    flex-direction: column;

    @media (max-width: 1050px) {
        margin: 0 auto;

        align-items: center;
    }

    @media (max-width: 650px) {
        padding-top: 100px;
    }

    @media (max-width: 380px) {
        padding-top: 50px;
    }
`;

export const Title = styled.h1`
    margin-bottom: 40px;

    font-size: ${({ theme }) => theme.fontSize.f64};

    @media (max-width: 1150px) {
        font-size: ${({ theme }) => theme.fontSize.f42};
    }

    @media (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.f35};
    }
`;

export const Subtitle = styled.h2`
    margin-bottom: 30px;

    font-size: ${({ theme }) => theme.fontSize.f32};

    @media (max-width: 1150px) {
        font-size: ${({ theme }) => theme.fontSize.f24};
    }

    @media (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.f20};
    }
`;

export const Image = styled.img`
    width: 58%;

    @media (max-width: 1050px) {
        display: none;
    }
`;

export const Logo = styled.img`
    width: 50px;
    height: 40px;
    margin-bottom: 55px;

    @media (max-width: 500px) {
        width: 40px;
        height: 30px;

        margin-bottom: 20px;
    }
`;

export const ButtonsColumn = styled.div`
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1050px) {
        width: 100%;

        align-items: center;
    }
`;

export const Text = styled.p`
    max-width: 70%;
    margin-bottom: 20px;

    font-size: ${({ theme }) => theme.fontSize.f14};

    @media (max-width: 1050px) {
        text-align: center;
    }
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.fontColors.blue};

    cursor: default;
`;

export const StyledLink = styled(Link)`
    border-bottom: 1px solid transparent;

    color: ${({ theme }) => theme.fontColors.blue};

    transition: all 0.3s linear;

    &:hover {
        border-color: ${({ theme }) => theme.fontColors.blue};
    }
`;

export const List = styled.ul`
    position: absolute;
    bottom: 0;
    padding: 20px 0;
    padding-left: 4%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1100px) {
        padding: 20px;

        flex-wrap: wrap;
    }
`;

export const ListItem = styled.li`
    margin-right: 12px;
    font-size: ${({ theme }) => theme.fontSize.f12};

    color: ${({ theme }) => theme.textColor};

    cursor: default;

    @media (max-width: 1200px) {
        font-size: ${({ theme }) => theme.fontSize.f10};
    }
`;
