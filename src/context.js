import {createContext } from 'react';
import Container from './components/Container';
import Tracks from './components/Tracks'

const Song= createContext()
// const tracks={
//     tracklist:[
//         {track:{trackName:"ADI"}},
//         {track:{trackName:"Jal"}}
//     ]
// }

const tracks="hello"

const Context = (props) => {
    return ( 
        <Song.Provider value={tracks}>
        {props.children}
        </Song.Provider>
     );
}
 
export default Context;
export {Song};


