import axios from 'axios'
import {useContext, useState,useEffect} from 'react'
import {Song} from '../context'

const Search = () => {

    const [state,setState]=useContext(Song)
    const [trackTitle, setTrackTitle]=useState('')
    const [userInput,setUserInput]=useState('')

    const handleChange =(e)=>{
        setUserInput(e.target.value)
    }

    useEffect(()=>{
        axios.get( `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=e68b24457aa707447caae1c9f7b56a10`)
        .then((res)=>{
         // console.log(res.data)
         var track_list=res.data.message.body.track_list;
         setState({track_list:track_list, heading:"Search Results"})
         setUserInput('')
        }).catch((err)=>console.log(err))
        
     },[trackTitle])

    const handleSearchLyrics=(e)=>{
        e.preventDefault()
        setTrackTitle(userInput)
    }

    return ( 
        <div className="search-card">
         
        <h1><i className="fas fa-music" /> Search for a song</h1>
        <p>Get the lyrics for a song</p>
        <form onSubmit={handleSearchLyrics}>
        
        <div className='search-form'>
        <input type='text' className='search-input'
        placeholder="Enter Song title..."
        name="userInput"
        value={userInput}
        onChange={handleChange}/>
        </div>
        <button className="search-button" type="submit">
        Get Track Lyrics
        </button>
        </form>
        </div>
     );
}
 
export default Search;