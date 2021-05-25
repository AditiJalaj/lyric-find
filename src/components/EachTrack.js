import React from 'react'

const Track = (props) => {
    const {track} = props
    
    return ( 
        <div className="card">
        <h2> {track.artist_name}</h2>
        <p> 
            <strong>
            <i className='fas fa-play'/>Track </strong>: {track.track_name} <br/>
        
            <strong>
              <i className="fas fa-compact-disc" /> Album
            </strong>
            : {track.album_name}
        </p>
       
        
        </div> );
}
export default Track;


//for genre
//track.primary_genres.music_genre_list[0].music_genre.music_genre_name