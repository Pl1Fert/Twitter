import styled from "styled-components";

export const Container = styled.div`
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

export const SmallProfileImage = styled.img`
    width: 50px;
    height: 50px;
`;

export const FileInput = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
`;

export const Label = styled.label`
    cursor: pointer;
`;

export const UploadIcon = styled.img`
    padding: 0 0 10px 15px;
`;

export const Column = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;
