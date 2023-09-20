import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    padding: 10px 15px;
    border-bottom: 1px solid ${({ theme }) => theme.border};

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

    @media screen and (max-width: 1160px) {
        flex-wrap: wrap;
    }
`;

export const TweetCount = styled.p`
    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;

export const Text = styled.p`
    padding-top: 8px;

    @media screen and (max-width: 550px) {
        font-size: 16px;
    }
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

    @media screen and (max-width: 550px) {
        font-size: 16px;
    }
`;

export const Email = styled.p`
    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;

export const Date = styled.p`
    font-size: 14px;

    @media screen and (max-width: 1160px) {
        width: 100%;
    }

    @media screen and (max-width: 550px) {
        font-size: 12px;
    }
`;

export const Avatar = styled.img`
    width: 45px;
    height: 50px;

    @media screen and (max-width: 550px) {
        width: 35px;
        height: 40px;
    }
`;

export const LikeImage = styled.img`
    cursor: pointer;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px 0;
`;

export const DeleteIcon = styled.img`
    position: absolute;
    top: 10%;
    right: 5%;

    width: 20px;
    height: 20px;

    cursor: pointer;
`;
