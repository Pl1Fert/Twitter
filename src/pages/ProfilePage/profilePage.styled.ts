import styled from "styled-components";

export const Main = styled.main`
    padding-top: 30px;
    width: 50%;

    border-right: 1px solid ${({ theme }) => theme.border};
    border-left: 1px solid ${({ theme }) => theme.border};
`;

export const BackgroundImage = styled.img`
    width: 100%;
`;

export const ProfileImage = styled.img`
    width: 120px;
    height: 120px;
`;

export const Row = styled.div`
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    margin-bottom: 5px;

    font-weight: 600;
    font-size: 20px;
`;

export const Name = styled.p`
    font-weight: 600;
    font-size: 24px;
`;

export const Email = styled.p`
    margin-bottom: 15px;

    font-size: 16px;
`;

export const Tweets = styled.p`
    font-size: 14px;
`;

export const Top = styled.div`
    padding-left: 20px;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    font-size: 20px;
`;
