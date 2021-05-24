import {Song} from '../context'
import {useContext} from 'react'

const Tracks = () => {
    const value=useContext(Song) 
    //const API_KEY = process.env.REACT_APP_API_KEY;
    
    return ( 
        <>
        {
            console.log(value)
        }
        </>
         );
}
 
export default Tracks;