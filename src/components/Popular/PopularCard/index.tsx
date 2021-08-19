import React from 'react';
import {
    Container,
    Photo,
    CardContent,
    CardInfo,
    PersonIcon,
    IconContainer,
    ListIcon,
    MessageIcon
} from './styles';
import {
    placeholderUser
} from '../../../assets/images';

const PopularCard = () => {
    return (
        <Container>
            <Photo src={placeholderUser} />
            <h2>
                Embrace the curl
            </h2>
            <CardContent>
                <CardInfo>
                    <IconContainer>
                        <PersonIcon />
                        <span>-</span>
                    </IconContainer>
                    <IconContainer>
                        <ListIcon />
                        <span>-</span>
                    </IconContainer>
                    <IconContainer>
                        <MessageIcon />
                        <span>-</span>
                    </IconContainer>
                </CardInfo>
                <span>May our curls pop and never stop!</span>
            </CardContent>
        </Container>
    )
}

export default PopularCard
