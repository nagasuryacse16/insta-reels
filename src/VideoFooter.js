import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({channel, description, song}) {
    return ( 
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className='videoFooter__music'>
                <MusicNoteIcon className='videoFooter__icon'/>
                <marquee><p>{song}</p></marquee>
                </div>
            </div>
            <img 
              className='videoFooter__record'
              src='https://static.thenounproject.com/png/934821-200.png'
              alt='spin'/>
        </div>
     );
}

export default VideoFooter;