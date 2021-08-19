import styled from "styled-components";
import * as Ai from 'react-icons/ai';

export const Container = styled.div`
    margin: 32px 0;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ReviewContent = styled.div`
    width: 1100px;
    display: flex;
`;

export const LatestReviewsContainer = styled.div`
    width: 60%;
    height: 100%;
`;

export const MRContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const LeftArrow = styled(Ai.AiOutlineLeft)`
    background: none;
`;

export const CardContainer = styled.div`
    max-width: 100%;
    height: 400px;
    margin-top: 20px;
    position: relative;
`;

export const ButtonNavRight = styled.button`
    background: none;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    color: #db284e;

    &.swiper-button-disabled {
        opacity: 0.35;
    }
`;

export const ButtonNavLeft = styled.button`
    background: none;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    color: #db284e;

    &.swiper-button-disabled {
        opacity: 0.35;
    }
`;

export const ButtonContainer = styled.div`
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
`;