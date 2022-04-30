import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/Home';
import {Route} from 'react-router-dom';
import Primera from './components/Primera';
import Create from './components/Create';
import Recetas from './components/Recetas';
import axios from 'axios';



function App() {

let [search, setSearch] = React.useState("");

async function getSearch(input) {
  try {
    const result = await axios.get(`http://localhost:3001/recipes?name=${input.name}`);
    console.log(result.data);
    const data = result.data;
    setSearch(data);
    
  } catch (error) {
    console.log(error);
  }
}
  
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
      <Route path='/detalle/:id' component={Recetas}></Route>
    </React.Fragment>

  );
}

export default App;
