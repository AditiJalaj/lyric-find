import {Song} from '../context'
import {useContext} from 'react'

const Tracks = () => {
    const tracksFetched=useContext(Song) 
    //const API_KEY = process.env.REACT_APP_API_KEY;
    
    return ( 
        <>
        {
            
        }
        </>
         );
}
 
export default Tracks;