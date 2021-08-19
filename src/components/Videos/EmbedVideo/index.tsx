import React from 'react';
import PropTypes from "prop-types";
import {
    VideoResponsive
} from './styles';

export const Video1 : React.FC<{embedId: string, fullsize: boolean}> = ({embedId, fullsize}) => {
    return (
        <VideoResponsive fullsize={fullsize}>
           <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            /> 
        </VideoResponsive>
    )
}

Video1.propTypes = {
    embedId: PropTypes.string.isRequired
  };