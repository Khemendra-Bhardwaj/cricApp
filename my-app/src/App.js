import React, {useState} from 'react';
import SearchBar from './Arena';
import { Route, Routes } from "react-router-dom"
import Authentication from './Authentication';
// import ReactEcharts from 'echarts-for-react';
import Home from './Home'
import News from './News';
import Icc from './Icc';


export default function App() {
const [darkMode, setDarkMode] = useState(false)

 
  return (
    <>

    <Routes>
      <Route path='/' element={ <Authentication  darkMode={darkMode} setDarkMode={setDarkMode}  />} >  </Route>
      <Route   path='/home' element={  <Home/>  } />
      <Route path='/news' element= { <News/> }  />
    <Route path='/search-player' element={  <SearchBar /> }>  </Route>
    <Route path='/icc' element={  <Icc /> }>  </Route>
    </Routes>
  



    </>
  );
}
