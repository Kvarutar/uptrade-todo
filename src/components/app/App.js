import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "../header/Header";
import Projects from '../projects/Projects';
import Tasks from '../tasks/Tasks';


function App() {
  return (
    <div className="App" >
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Projects/>}/>
          <Route path="/project/:slug" element={<Tasks/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
