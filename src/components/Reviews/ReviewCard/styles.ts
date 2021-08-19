import styled from "styled-components";
import * as Ai from 'react-icons/ai';

export const Container = styled.div`
    width: 315px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardContainer = styled.div`
    max-width: 100%;
    height: 280px;
    border: 0.1rem solid #d9d9d9;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const TopCard = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
`;

export const ProductImage = styled.img`
    width: 70px;
    margin-right: 20px;
`;

export const ProductInfo = styled.div`
    h2 {
        font-size: 16px;
        margin: 0 0 10px 0;
    }
`;

export const Border = styled.div`
    width: 100%;
    height: 1.5px;
    margin: 10px 0;
    background-color: #d9d9d9;
`;

export const BottomCard = styled.div`
    width: 100%;
    flex-grow: 1;
`;

export const RatingContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Rating = styled.div`
    width: auto;
`;

export const RatingStar = styled(Ai.AiFillStar)<{rated?: boolean}>`
    font-size: 1.25rem;
    color: ${({rated}) => rated ? "#db284e" : "#d0d0d0"};
`;

export const Timestamp = styled.span`
    align-self: center;
    color: #9b9b9b;
    font-size: 14px;
`;

export const Comments = styled.div`
    margin-top: 10px;

    span {
        font-size: 14px;
        line-height: 20px;
        color: #4a4a4a;
    }

    span > .read-more {
        cursor: pointer;
        display: inline;
        color: #db284e;
    }
`;

export const Commenter = styled.div`
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .commenter-name {
        font-size: 16px;
        margin: 10px 0;
    }
    
    .commenter-info {
        color: #9b9b9b;
        font-size: 12px;
    }
`;

export const CommenterImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    z-index: 9999;
`;