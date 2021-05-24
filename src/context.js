import {createContext, useEffect, useState } from 'react';
import Container from './components/Container';
import Tracks from './components/Tracks'
import axios from 'axios'

const Song= createContext()
// const tracks=[
//         {track:{trackName:"ADI"}},
//         {track:{trackName:"Jal"}}
   
// ]

//e68b24457aa707447caae1c9f7b56a10

const Context = (props) => {
    
const [trackList,setTrackList]=useState([])


    useEffect(()=>{
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=e68b24457aa707447caae1c9f7b56a10`)
    .then((res)=>{
        console.log(res.data.message.body.track_list)
        setTrackList(res.data.message.body.track_list)
    })
    .catch((err)=>console.log(err))
    })

    return ( 
        <Song.Provider value={trackList}>
        {props.children}
        </Song.Provider>
     );
}
 
export default Context;
export {Song};


