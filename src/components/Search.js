import axios from 'axios'
import {useContext, useState} from 'react'


const Search = () => {

    const [trackTitle, setTrackTitle]=useState('')

    const handleChange =(e)=>{
        setTrackTitle(e.target.value)
    }
    return ( 
        <div className="search-card">
         
        <h1><i className="fas fa-music" /> Search for a song</h1>
        <p>Get the lyrics for a song</p>
        <form>
        
        <div className='search-form'>
        <input type='text' className='search-input'
        placeholder="Enter Song title..."
        name="trackTitle"
        value={trackTitle}
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