import React from 'react';
import SearchBar from './Arena';
import { Route, Routes } from "react-router-dom"
import Authentication from './Authentication';
// import ReactEcharts from 'echarts-for-react';


export default function App() {


 
  return (
    <>

    <Routes>
      <Route path='/' element={ <Authentication/>} >  </Route>
    <Route path='/search-player' element={  <SearchBar /> }>  </Route>
    </Routes>
  



    </>
  );
}
