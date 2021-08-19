import React from 'react';
import {
    Container,
    FooterContainer,
    FooterContent,
    LeftContainer,
    RightContainer,
    NavLinksContainer,
    NavLinksRow,
    FemaleDailyAbout,
    Logo,
    DownloadAppContainer,
    DownloadAppLogo,
    SocialMediaContainer,
    FacebookIcon,
    TwitterIcon,
    YoutubeIcon,
    InstagramIcon
} from './styles';
import {
    logo,
    appStore,
    googlePlay
} from '../../assets/images';
import {
    BottomFrame
} from '../Advertisements';

const Footer = () => {
    return (
        <Container title="Footer">
            <FooterContainer>
                <FooterContent>
                    <LeftContainer>
                        <NavLinksContainer>
                            <NavLinksRow>
                                <span>
                                    About Us 
                                </span>
                                <span>
                                    Feedback 
                                </span>
                                <span>
                                    Contact 
                                </span>
                            </NavLinksRow>
                            <NavLinksRow>
                                <span>
                                    Terms &amp; Conditions
                                </span>
                                <span>
                                    Privacy Policy 
                                </span>
                                <span>
                                    Help 
                                </span>
                            </NavLinksRow>
                            <NavLinksRow>
                                <span>
                                    Awards
                                </span>
                                <span className="last-item">
                                    Newsletter 
                                </span>
                                <span />
                            </NavLinksRow>
                        </NavLinksContainer>
                        <FemaleDailyAbout>
                            <Logo src={logo} />
                            <span>
                                Copyright &copy; 2015-2017 Female Daily Network &#183; All rights reserved
                            </span>
                        </FemaleDailyAbout>
                    </LeftContainer>
                    <RightContainer>
                        <span>
                            Download Our Mobile App
                        </span>
                        <DownloadAppContainer>
                            <DownloadAppLogo className="appStore" src={appStore} />
                            <DownloadAppLogo className="googlePlay" src={googlePlay} />
                        </DownloadAppContainer>
                        <SocialMediaContainer>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <YoutubeIcon />
                        </SocialMediaContainer>
                    </RightContainer>
                </FooterContent>  
            </FooterContainer>
            <BottomFrame />
        </Container>
    )
}

export default Footer
