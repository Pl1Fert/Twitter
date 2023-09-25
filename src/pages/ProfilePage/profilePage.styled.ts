import styled from "styled-components";

export const BackgroundImage = styled.img`
    width: 100%;
`;

export const Avatar = styled.img`
    width: 120px;
    height: 120px;

    @media screen and (max-width: 1160px) {
        width: 90px;
        height: 90px;
    }

    @media screen and (max-width: 550px) {
        width: 60px;
        height: 60px;
    }
`;

export const Row = styled.div`
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    margin-bottom: 5px;

    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    font-size: ${({ theme }) => theme.fontSize.f20};

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.f18};
    }
`;

export const Name = styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    font-size: ${({ theme }) => theme.fontSize.f24};

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.f18};
    }
`;

export const Email = styled.p`
    margin-bottom: 15px;

    font-size: ${({ theme }) => theme.fontSize.f16};
`;

export const Tweets = styled.p`
    font-size: ${({ theme }) => theme.fontSize.f14};
`;

export const Top = styled.div`
    padding-left: 20px;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
`;

export const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSize.f20};

    @media screen and (max-width: 550px) {
        margin-bottom: 20px;

        font-size: ${({ theme }) => theme.fontSize.f14};
    }
`;

export const TabName = styled.p`
    width: fit-content;
    padding: 15px 35px;
    margin-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.border};

    font-size: ${({ theme }) => theme.fontSize.f20};

    cursor: pointer;

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.f18};
    }
`;

export const BackIcon = styled.img`
    margin-right: 15px;

    cursor: pointer;
`;
