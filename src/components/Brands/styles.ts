import styled from "styled-components";
import * as Ai from 'react-icons/ai';

export const Container = styled.div`
    margin: 56px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BrandsContent = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: column;
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
    font-size: 15px;
    cursor: pointer;

    span {
        font-size: 20px;
        font-weight: 200;
        letter-spacing: 0.5px;
        margin-right: 20px;
    }
`;

export const RightArrow = styled(Ai.AiOutlineRight)`
    background: none;
`;

export const TopBrandsContainer = styled.div`
    width: 90%;
    margin-top: 32px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
`;

export const Logo = styled.img`
    width: 100px;
`;

export const TextContainer = styled.div`
    margin-top: 32px;
    width: 100%;

    span {
        font-size: 19.5px;
    }
`;