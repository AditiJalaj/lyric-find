import './App.css';
import Container from './components/Container';
import NavBar from './components/NavBar'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'

const App=()=>{
  return (
    <div>
    <NavBar/>
    <Router>
    <Switch>
    <Route exact component={Container}/>
    </Switch>
    </Router>
    </div>
  )
}
export default App;
