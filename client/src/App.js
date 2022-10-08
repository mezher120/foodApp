import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect } from 'react';
import Home from './components/Home';
import {Route} from 'react-router-dom';
import Primera from './components/Primera';
import Create from './components/Create';
import Recetas from './components/Recetas';
import Newhtml from './components/Newhtml';
import axios from 'axios';
import { getAll } from './actions';
import { useDispatch } from 'react-redux';


function App() {

const dispatch = useDispatch();

useEffect(()=>{
dispatch(getAll());
},[]);

  
  return (
    <React.Fragment>
      <Route exact path='/'>
        <Primera>
        </Primera>
      </Route>
      <Route path='/home'>
      <Navbar ></Navbar>
      </Route>
      <Route exact path='/home'>
      <Home ></Home>
       </Route>
      <Route exact path='/home/create'>
      <Create></Create>
      </Route>
      <Route path='/newhtml' component={Newhtml}></Route>
      <Route path='/detalle/:id' component={Recetas}></Route>
    </React.Fragment>

  );
}

export default App;
