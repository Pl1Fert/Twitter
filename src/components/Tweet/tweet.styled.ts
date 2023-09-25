import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    padding: 10px 15px;
    border-bottom: 1px solid ${({ theme }) => theme.border};

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 1160px) {
        flex-wrap: wrap;
    }
`;

export const TweetCount = styled.p`
    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.f14};
    }
`;

export const Text = styled.p`
    padding-top: 8px;

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.f16};
    }
`;

export const Footer = styled.div`
    margin-top: 15px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.p`
    margin-right: 8px;

    font-weight: ${({ theme }) => theme.fontWeights.semiBold};

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.f16};
    }
`;

export const Email = styled.p`
    margin-right: 8px;

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.f14};
    }
`;

export const Date = styled.p`
    font-size: ${({ theme }) => theme.fontSize.f14};

    @media screen and (max-width: 1160px) {
        width: 100%;
    }

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.f12};
    }
`;

export const Avatar = styled.img`
    width: 45px;
    height: 45px;
    margin-right: 15px;

    @media screen and (max-width: 550px) {
        width: 35px;
        height: 40px;
    }
`;

export const LikeImage = styled.img`
    margin-right: 10px;

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
