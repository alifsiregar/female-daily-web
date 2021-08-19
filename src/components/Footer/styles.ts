import styled from "styled-components";
import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import * as Ti from 'react-icons/ti';

export const Container = styled.div`
    margin: 56px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterContainer = styled.div`
    margin-bottom: 28px;
    width: 1366px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 0.125rem solid #d9d9d9;;
`;

export const FooterContent = styled.div`
    margin-top: 32px;
    height: 175px;
    width: 1150px;
    display: flex;
`;

export const LeftContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
`;

export const RightContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;

    span {
        font-weight: 700;
        font-size: 15px;
        margin-bottom: 18px;
    }
`;

export const NavLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 85px;
`;

export const NavLinksRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: calc(100%/3);

    span {
        cursor: pointer;
        font-weight: 700;
        font-size: 15px;
    }

    .last-item {
        margin-top: -17px;
    }
`;

export const FemaleDailyAbout = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    height: 60px;
    justify-content: space-between;

    span {
        color: #9b9b9b;
    }
`;

export const Logo = styled.img`
    width: 150px;
`;

export const DownloadAppContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
`;

export const DownloadAppLogo = styled.img`
    width: 125px;
    cursor: pointer;
`;


export const SocialMediaContainer = styled.div`
    width: 75%;
    margin-top: auto;
    font-size: 2.5rem;
    display: flex;
    justify-content: space-between;
`;

export const FacebookIcon = styled(Fa.FaFacebook)`
    cursor: pointer;
    color: #3b5998;
`;

export const TwitterIcon = styled(Ai.AiFillTwitterCircle)`
    color: #55acee;
    cursor: pointer;
`;

export const InstagramIcon = styled(Ti.TiSocialInstagramCircular)`
    color: #428bca;
    cursor: pointer;
`;

export const YoutubeIcon = styled(Ai.AiFillYoutube)`
    color: #d42428;
    cursor: pointer;
`;