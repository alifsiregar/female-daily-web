import React from 'react';
import {
    TopFrameContainer,
    BillboardHorizontalContainer,
    MR2Container,
    BottomFrameContainer
} from './styles';

export const TopFrame = () => {
    return (
        <TopFrameContainer>
            <h2>
                Top Frame 970x50
            </h2>
        </TopFrameContainer>
    )
}

export const Billboard = () => {
    return (
        <BillboardHorizontalContainer>
            <h2>
                Billboard 970x250
            </h2>
        </BillboardHorizontalContainer>
    )
}

export const Horizontal = () => {
    return (
        <BillboardHorizontalContainer>
            <h2>
                Horizontal 970x250 <br /> Internal Campaign Only
            </h2>
        </BillboardHorizontalContainer>
    )
}

export const MR2 = () => {
    return (
        <MR2Container>
            <h2>
                MR2<br />300x250
            </h2>
        </MR2Container>
    )
}

export const BottomFrame = () => {
    return (
        <BottomFrameContainer>
            <h2>
                Bottom Frame 970x50, 468x60, 320x50
            </h2>
        </BottomFrameContainer>
    )
}
