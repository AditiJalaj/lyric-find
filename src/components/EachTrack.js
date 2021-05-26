import React from 'react'
import { Link } from 'react-router-dom';


const Track = (props) => {
    const {track} = props
    
    return ( 
        <div className="card">
        <h2> <i className='fas fa-play'/> {track.track_name}</h2>
        <p> 
            <strong>
            Artist </strong>: {track.artist_name} <br/>
        
            <strong>
              <i className="fas fa-compact-disc" /> Album
            </strong>
            : {track.album_name}

            
        </p>
       <Link
       to={`lyrics/track/${track.track_id}`}
       className='lyric-button'>
       <i className="fas fa-chevron-right"/> View Lyrics
       </Link>
        
        </div> );
}
export default Track;




