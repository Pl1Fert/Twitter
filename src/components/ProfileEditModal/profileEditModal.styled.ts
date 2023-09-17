import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 50;

    width: 1000px;
    height: 500px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0 0 5px ${({ theme }) => theme.shadowColor};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.backgroundColor};

    transform: translate(-50%, -50%);
`;

export const Image = styled.img`
    position: absolute;
    top: 4%;
    right: 3%;

    width: 25px;
    height: 25px;

    cursor: pointer;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
`;

export const ErorrsWrapper = styled.div`
    margin-bottom: 25px;

    display: flex;
    justify-content: flex-start;
    gap: 10px;

    font-size: 12px;

    color: ${({ theme }) => theme.fontColors.red};
`;

export const Form = styled.form`
    width: 100%;
`;

export const Center = styled.div`
    margin-bottom: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.textColor};
`;
