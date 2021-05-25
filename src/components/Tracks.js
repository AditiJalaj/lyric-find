import {Song} from '../context'
import {useContext} from 'react'

const Tracks = () => {
    const value=useContext(Song) 
  
    return ( 
        <>
        {
            console.log(value)
        }
        </>
         );
}
 
export default Tracks;