// import './App.css';
import Header from './components/Header';

import AddOffer from "./components/AddOffer";
import ViewOffer from "./components/ViewOffer";
import Update from "./components/Update";
import './ViewOffer.css';


//import {BrowserRouter as Router, Route} from "react-router-dom";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import UpdateOffer from './components/UpdateOffer';

//import UpdateBoat from './components/UpdateBoat';



function App() {
  return (
    //<Router>
    <div>
      <Header/>

      <BrowserRouter>
          <Routes>

            
            <Route path="/add" exact element={<AddOffer/>} />
            <Route path="/" exact element={<ViewOffer/>} />
            <Route path="/update" exact element={<UpdateOffer/>} />
           
            <Route path="/update" exact element={<Update/>} />
          </Routes>
        </BrowserRouter>


      
    </div>
    
  );
}

export default App;
