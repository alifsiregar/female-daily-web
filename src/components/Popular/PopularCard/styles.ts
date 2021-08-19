import styled from "styled-components";
import * as Ai from 'react-icons/ai';

export const Container = styled.div`
    width: 260px;
    height: 360px;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 22px;
    }
`;

export const Photo = styled.img`
    border-radius: 100%;
    height: 175px;
    width: 175px;
`;

export const CardContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-size: 15px;
        text-align: center;
    }
`;

export const CardInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PersonIcon = styled(Ai.AiOutlineUser)`
    font-size: 1.5rem;
    background: none;
`;

export const ListIcon = styled(Ai.AiOutlineUnorderedList)`
    font-size: 1.5rem;
    background: none;
`;

export const MessageIcon = styled(Ai.AiOutlineMessage)`
    font-size: 1.5rem;
    background: none;
`;