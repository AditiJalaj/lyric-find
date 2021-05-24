import {Song} from '../context'
import {useContext} from 'react'

const Tracks = () => {
    const t=useContext(Song) //undefined
    return ( 
        <>
        The songs are {t}
        </>
         );
}
 
export default Tracks;