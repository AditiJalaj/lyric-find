import {createContext, useEffect, useState } from 'react';
import Container from './components/Container';
import Tracks from './components/Tracks'
import axios from 'axios'

const Song= createContext()

//https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=e68b24457aa707447caae1c9f7b56a10
//e68b24457aa707447caae1c9f7b56a10
//https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=e68b24457aa707447caae1c9f7b56a10

const Context = (props) => {
    
let [trackList,setTrackList]=useState([])

const [heading,setHeading]=useState("")

    useEffect(()=>{
    axios.get( `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=e68b24457aa707447caae1c9f7b56a10`)
    .then((res)=>{
       console.log(res.data)
       console.log("use effect ran")
        setTrackList(res.data.message.body.track_list)
        setHeading("Top 10 Tracks")
    })
    .catch((err)=>console.log(err))
    },[])

    return ( 
        <Song.Provider value={trackList,heading}>
        {props.children}
        </Song.Provider>
     );
}
 
export default Context;
export {Song};


