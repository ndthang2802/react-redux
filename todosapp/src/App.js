import './App.css';
import Authentication from './components/Authentication';
import Main from './components/Main'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route,Switch } from 'react-router-dom'
function App() {

  const { isLoggedIn } = useSelector(state => state.User)

  const [renderHomePage,setRenderHomePage] = useState(false)

  useEffect(()=>{
    // get User from local storage
    if (isLoggedIn) { 
      setRenderHomePage(true)
    }
  },[])

  return (
    <Router>
    <div className="App">
      {
        renderHomePage ? <Redirect to='/dashboard' /> : <Redirect to='/auth' /> 
      }
      <Switch>
          <Route path='/dashboard'>
            <Main />
          </Route>
          <Route path='/auth'>
            <Authentication />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
