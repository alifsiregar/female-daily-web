import styled from "styled-components";
import * as Ai from 'react-icons/ai';

export const Container = styled.div`
    margin: 48px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const VideosContent = styled.div`
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

export const LatestVideosContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;

    .top-video {
        margin-bottom: 15px;
    }

    .bottom-video {
        margin-top: 15px;
    }
`;

export const LeftContainer = styled.div`
    width: 60%;
    margin-right: 32px;
`;

export const RightContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`;
