import styled from "styled-components";
import * as Ai from 'react-icons/ai';

export const Container = styled.div<{margin?: string}>`
    width: 200px;
    margin: ${({margin}) => margin ? margin : "0 0 0 0"};
    display: flex;
    flex-direction: column;
`;

export const CardHeader = styled.div`
    width: 200px;
    height: 50px;
    margin-left: 20px;
    display: flex;
    align-items: center;
`;

export const EditorImage = styled.img`
    margin-top: 20px;
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    z-index: 9999;
`;

export const EditorInfo = styled.div`

    h2 {
        color: #4a4a4a;
        margin: 0 0 3px 0;
        font-size: 15px;
    }

    span {
        color: #9b9b9b;
        font-size: 11px;
        font-weight: 200;
        letter-spacing: 0.5px;
    }
`;

export const CardContainer = styled.div<{background: boolean, border: boolean}>`
    border: ${({border}) => border ? "0.1rem solid #d9d9d9" : "none"};
    border-radius: 0.75rem;
    padding: 15px;
    width: 100%;
    height: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({background}) => background ? "#fff" : "none"};

    .match {
        font-weight: 600;
        font-size: 14px;
        align-self: flex-start;
        margin: 15px 0 -10px 0;
        color: #db284e;
    }
`;

export const ProductImage = styled.img`
    width: 125px;
    height: 125px;
`;

export const RatingContainer = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
        margin: 5px 10px 0 0;
    }

    span {
        margin: 3px 0 0 10px;
    }
`;

export const RatingStar = styled(Ai.AiFillStar)<{rated?: boolean}>`
    font-size: 1.25rem;
    color: ${({rated}) => rated ? "#db284e" : "#d0d0d0"};
`;

export const ProductInfo = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    
    h4 {
        margin: 0;
    }

    .product-title {
        color: #000;
        margin: 7px 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    span {
        color: #acacac;
    }
`;