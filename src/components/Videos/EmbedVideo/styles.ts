import styled from "styled-components";

export const VideoResponsive = styled.div<{fullsize: boolean}>`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    height: ${({fullsize}) => fullsize ? "100%" : "auto" };
    width: ${({fullsize}) => fullsize ? "100%" : "auto" };

    iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;   
    }
`;