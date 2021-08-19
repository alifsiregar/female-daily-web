import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: 300px;
    flex-grow: 1;
    margin: 0 8px;
`;

export const ArticleImage = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const ArticleText = styled.div`
    width: 100%;

    h2 {
        margin: 20px 0;
        font-size: 21px;
    }
`;

export const ArticleUserTime = styled.div`
    width: 100%;

    span {
        color: #9b9b9b;
    }

    span > .username {
        color: #000;
    }
`;