import {Song} from '../context'
import {useContext} from 'react'
import Spinner from './Spinner'
import EachTrack from './EachTrack'

const Tracks = () => {
    const [state]=useContext(Song) 
  const { track_list, heading} = state;
  
  //track_list is the array
  if(track_list.length===0){
   return  <Spinner/>
 }
 else{
    return ( 
        <>
        <h1 style={{textAlign:'center'}}>{heading}</h1>
        <div>
        {track_list.map((item)=>{
            return <EachTrack key={item.track.track_id} track={item.track}/>
        })}
        </div>
        </>
         );
 }
    
}
 
export default Tracks;