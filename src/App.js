import About from './About';
import Contact from './Contact';
import { Support } from './Support';
import Navbar from './Navbar';
import Home from './Home';
import Error404 from './Error404';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Link } from 'react-router-dom'


function App() {





  return (
    <div>
    <BrowserRouter>
<Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='About' element={<About/>}/> */}
      {/* <Route path='Contact' element={<Contact/>}/> */}
      {/* <Route path='Support' element={<Support/>}/> */}
      {/* <Route path='*' element={<Error404/>}/> */}
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
