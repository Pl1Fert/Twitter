import styled from "styled-components";

export const Container = styled.div`
    padding: 10px 15px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
`;

export const Text = styled.p`
    padding-top: 8px;
`;

export const Footer = styled.div`
    margin-top: 15px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.p`
    font-weight: 600;
`;

export const Email = styled.p``;

export const Date = styled.p``;

export const Image = styled.img`
    width: 45px;
    height: 50px;
`;

export const LikeImage = styled.img`
    cursor: pointer;
`;
