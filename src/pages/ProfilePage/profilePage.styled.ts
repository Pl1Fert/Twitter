import styled from "styled-components";

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

    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Description = styled.p`
    font-size: 20px;
`;

export const TabName = styled.p`
    width: fit-content;
    padding: 15px 35px;
    margin-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.border};

    font-size: 20px;

    cursor: pointer;
`;

export const BackIcon = styled.img`
    cursor: pointer;
`;
