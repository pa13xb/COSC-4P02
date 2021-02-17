import logo from '../logo.svg';
import '../css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./Login.js"


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <Link to="/Login"> Login</Link>
          </ul>
        </header>


        <Switch>
          <Route exact path='/Login' component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
