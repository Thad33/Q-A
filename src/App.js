import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from '../src/pages/Home'
import AskQA from '../src/pages/AskQA'
import LogIn from '../src/pages/LogIn'
import SignUp from '../src/pages/SignUp'
import SingleQA from '../src/pages/SingleQA'
import Profile from '../src/pages/Profile'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi Thaddaeus</h1>
       <Router>
        <Home />
        <Route>
          <Route element={<Home />} index />
          <Route element={<LogIn />} path="logIn" />
          <Route element={<SignUp />} path="SignUp" />
          <Route element={<SingleQA />} path="/SingleQA" />
          <Route element={<Profile />} path="/Profile" />
          <Route element={<AskQA />} path="/SingleQA" />
          
        </Route>
      </Router>
    </div>
  );
}

export default App;
