import styled from "styled-components";
import {
    match_bg
} from '../../assets/images';

export const Container = styled.div`
    margin: 56px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MatchContent = styled.div`
    margin-bottom: 28px;
    background-color: #fddae0;
    background-image: url(${match_bg});
    background-repeat: no-repeat;
    height: 350px;
    width: 1366px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-right: 32px;
    margin-left: 240px;

    h2 {
        margin-top: 0;
        font-size: 28px;
    }

    span {
        font-size:20px;
    }
`;

export const MatchButton = styled.div`
    margin-top: 32px;
    border: 0;
    background-color: #db284e;
    width: 200px;
    height: 45px;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 200;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
`;

export const CardContainer = styled.div`
    width: 625px;
    display: flex;
    justify-content: space-between;
`;