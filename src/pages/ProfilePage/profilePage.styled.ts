import styled from "styled-components";

export const Main = styled.main`
    width: 50%;

    border-right: 1px solid ${({ theme }) => theme.border};
    border-left: 1px solid ${({ theme }) => theme.border};
`;

export const BackgroundImage = styled.img`
    width: 100%;
`;

export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
`;

export const SmallProfileImage = styled.img`
    width: 50px;
    height: 50px;
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
    font-size: 16px;
`;

export const Tweets = styled.p`
    font-size: 14px;
`;

export const Top = styled.div`
    padding-left: 20px;
    margin-bottom: 20px;
`;

export const WithTextArea = styled.div`
    border-top: 1px solid ${({ theme }) => theme.border};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    padding: 0 15px;

    display: flex;
    align-items: center;
`;

export const TextArea = styled.textarea`
    padding: 15px;
    width: 100%;
    height: 120px;

    outline: none;
    font: inherit;
    font-size: 18px;

    color: ${({ theme }) => theme.input.textColor.primary};
    border: none;

    transition: all 0.3s linear;
    resize: none;

    &::placeholder {
        font: inherit;
        font-size: 18px;

        color: ${({ theme }) => theme.input.placeholder.primary};
    }
`;
