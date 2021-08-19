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

const PopularCard = () => {
    return (
        <Container>
            <Photo src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
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
