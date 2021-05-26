import axios from 'axios'
import {useContext, useState} from 'react'


const Search = () => {

    const [trackTitle, setTrackTitle]=useState('')
    
    const handleChange =(e)=>{
        setTrackTitle(e.target.value)
    }
    return ( 
        <div class="search-card">
         
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

        </form>
        </div>
     );
}
 
export default Search;