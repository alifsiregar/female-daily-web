import React from 'react'
import { 
    Container,
    HeaderContent,
    HeaderMenuButton,
    HeaderLogo,
    SearchBar,
    SearchLogo,
    SearchInput,
    LoginButton,
    LoginLogo
} from './styles';
import {
    logo
} from '../../assets/images';

const Header = () => {
    return (
        <Container>
            <HeaderContent>
                <HeaderMenuButton />
                <HeaderLogo src={logo} alt="Female Daily Logo" />
                <SearchBar>
                    <SearchLogo />
                    <SearchInput 
                        placeholder="Search products, articles, topics, brands, etc"
                        type="text" />
                </SearchBar>
            </HeaderContent>
            <LoginButton>
                <LoginLogo />
                <span>
                    LOGIN / SIGN UP
                </span>
            </LoginButton>
        </Container>
    )
}

export default Header
