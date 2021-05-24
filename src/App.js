import './App.css';
import Container from './components/Container';
import NavBar from './components/NavBar'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Context from './context'
const App=()=>{
  return (
    <div>
    <NavBar/>
    <Context>
    <Router>
    <Switch>
    <Route exact component={Container}/>
    </Switch>
    
    </Router>
    </Context>
    </div>
  )
}
export default App;
