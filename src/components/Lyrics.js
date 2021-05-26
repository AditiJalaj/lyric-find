import axios from 'axios'
import {useEffect, useState} from 'react'
import Spinner from './Spinner'
import {Link } from 'react-router-dom'


const Lyrics = (props) => {

    const [track,setTrack]=useState({})
    const [lyrics,setLyrics]=useState({})

    useEffect(()=>{
        axios.get( `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=e68b24457aa707447caae1c9f7b56a10`)
    .then((res)=>{
     
        var lyrics=res.data.message.body.lyrics;
        setLyrics({lyrics})
       
     //now we make another request to endpoint-> track.get to get track info
       return axios.get( `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=e68b24457aa707447caae1c9f7b56a10`)
       .then((res)=>{ 
        var track=res.data.message.body.track
        console.log(track)
        setTrack({track})
         });
    })
    .catch((err)=>console.log(err))
    },[props.match.params.id])

        
    console.log('these are lyrics ', lyrics)  //undefined
        if(track===undefined || Object.keys(track).length===0 ||lyrics===undefined ||Object.keys(lyrics).length===0)
             {
            return(<div>
                <Spinner/>
                </div>) 
        }

      else{
           return (
              <>
              <Link to='/'>
              <button className="goback">Go Back</button>
              </Link>

              
              <div className="card">
              <div className='card-header'>
               {track.track.track_name} by {track.track.artist_name}
               </div>
               <div className="card-body">
             <p> {lyrics.lyrics && lyrics.lyrics.lyrics_body} </p>
               </div>
               </div>

               <ul>
               <li> 
               <strong> Album ID</strong> : {track.track.album_id}</li>

               <li> 
               <strong> Genre </strong> : {track.track.primary_genres.music_genre_list.length === 0
                ? "NO GENRE AVAILABLE"
                : track.track.primary_genres.music_genre_list[0].music_genre.music_genre_name} </li>
               
               <li><strong>Explicit Words </strong> : {track.track.explicit===0 ? 'No' : 'Yes' } </li>

               </ul>
               </>
          )
}
       
}
 
export default Lyrics;
