import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    border-bottom: 0.125rem solid #d9d9d9;
`;

export const CategoriesContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 800px;

    h4 {
        cursor: pointer;
    }
`;