import './App.css';
import Container from './components/Container';
import NavBar from './components/NavBar'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Context from './context'
import Lyrics from './components/Lyrics'

const App=()=>{
  return (
    <div>
    <NavBar/>
    <Context>
    <Router>
    <Switch>
    <Route exact path='/' component={Container}/>
    <Route exact path='/lyrics/track/:id' component={Lyrics}/>
    </Switch>
    
    </Router>
    </Context>
    </div>
  )
}
export default App;
