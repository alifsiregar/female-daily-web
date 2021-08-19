import styled from "styled-components";
import * as Ai from 'react-icons/ai';

export const Container = styled.div`
    margin: 32px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ArticleContent = styled.div`
    width: 1100px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HeaderText = styled.div`
    
    h2 {
        margin: 0 0 15px 0;
    }

    span {
        color: #9b9b9b;
        font-size: 20px;
        font-weight: 200;
        letter-spacing: 0.5px;
    }
`;

export const HeaderSeeMore = styled.div`
    align-self: flex-end;
    color: #db284e;
    font-size: 20px;
    cursor: pointer;

    span {
        font-weight: 200;
        letter-spacing: 0.5px;
        margin-right: 20px;
    }
`;

export const RightArrow = styled(Ai.AiOutlineRight)`
    font-size: 15px;
    background: none;
`;

export const CardContainer = styled.div`
    max-width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
`;