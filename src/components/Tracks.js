import {Song} from '../context'
import {useContext} from 'react'

const Tracks = () => {
    const t=useContext(Song) 

    return ( 
        <>
        {
            t.map((m)=>{
                console.log(m)
            })
        }
        </>
         );
}
 
export default Tracks;