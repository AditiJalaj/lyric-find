import axios from 'axios'
import {useEffect, useState} from 'react'
import Spinner from './Spinner'

const Lyrics = (props) => {

    const intialState1={
        lyrics:{},
        track:{}
    }
    const [state,setState]=useState(intialState1)

    useEffect(()=>{
        axios.get( `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=e68b24457aa707447caae1c9f7b56a10`)
    .then((res)=>{
      // console.log(res.data)
 
       setState({lyrics:res.data.message.body.lyrics})

       //now we make another request to endpoint-> track.get to get track info
       return axios.get( `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=e68b24457aa707447caae1c9f7b56a10`)
       .then((res)=>{ 
           //console.log('from track.get ' , res.data)
           setState({track:res.data.message.body.track})
         });
    })
    .catch((err)=>console.log(err))
    },[])



    //destructuring lyrics and track from state
    const {track,lyrics}=state
    console.log('track after useeffect ', track)
    
        
        if(track===undefined){
            return(<div>
                <Spinner/>
                </div>) 
        }

      else{
           return (
              <h1>
               Lyrics
               </h1>
          )
}
       
}
 
export default Lyrics;