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
        //    console.log('from track.get ' , res.data)
        //    setState({track:res.data.message.body.track})
        var track=res.data.message.body.track
        setTrack({track})
         });
    })
    .catch((err)=>console.log(err))
    },[props.match.params.id])



    
    
   // console.log('track after useeffect ', track)
    //|| 
    // lyrics===undefined || 
    // Object.keys(track).length===0 ||
    //  Object.keys(lyrics).length===0
        
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
              hello
               <Link to='/'>Go back</Link>
               </>
          )
}
       
}
 
export default Lyrics;