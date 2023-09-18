import logo from './logo.svg';
import './App.css';
// import Login from './Pages/Login';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './Insurence/Pages/Home';
import Topnav from './Insurence/Components/Topnav';
import Explore from './Insurence/Pages/Explore';
import Renew from './Insurence/Pages/Renew';
import Claim from './Insurence/Pages/Claim';
import Help from './Insurence/Pages/Help';
import Learnmore from './Insurence/Pages/learnmore';
import Store from './Insurence/Pages/Store';
import { Provider } from 'react-redux';
import Logincmp from './Insurence/Pages/Login';
import Register from './Insurence/Pages/Register';
import Newuser from './Insurence/Pages/newuser';

function App() {
  return (
    <Provider store={Store}>
    <Router>
      <Topnav/>
      <Routes>
      <Route path='/' element={<Logincmp/>}/>
        <Route path='/new' element={<Newuser/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/renew' element={<Renew/>}/>
        <Route path='/claim' element={<Claim/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/learnmore' element={<Learnmore/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;