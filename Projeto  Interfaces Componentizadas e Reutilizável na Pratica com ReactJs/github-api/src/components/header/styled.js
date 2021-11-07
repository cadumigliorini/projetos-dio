import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 40px;
        padding: 8px;
    }

    button {
        background-color: #225ed8;
        color: #ccc;
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 14px;

        &:hover {
            background-color: #ccc;
            color: #225ed8;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }
    }
`;