import React, { useState } from 'react';
// import ReactEcharts from 'echarts-for-react';
import Selectbar from './Select';
import Graph from './Graph';
import SearchBox from './Search';
// import GetBatBowlData from './fieldData'
// import find from './Select'
import Playerprofile  from './Playerprofile'; 


export default function SearchBar() {

  // const optionV = {
  //   legend: {},
  //   tooltip: {},
  //   dataset: {
  //     dimensions: ['product', 'Test', 'Odi', 'T20', 'Ipl'],
  //     source: [
  //       { product: 'Format', 'Test': 0, 'Odi': 0, 'T20': 0, 'Ipl': 0 },
  //     ],
  //   },
  //   xAxis: { type: 'category' },
  //   yAxis: {},
  //   series: [
  //     { type: 'bar' },
  //     { type: 'bar' },
  //     { type: 'bar' },
  //     { type: 'bar' },
  //   ],
  // };

  const [playerName, setPlayerName] = useState('Joe root');
  const [stats, setStats] = useState([[]]);
  const [mode, setMode] = useState('batting');
  const [find, setFind] = useState('Matches');
  // const [findBowl, setFindBowl] = useState('Matches')
  // const [optionVal, setOptionVal] = useState(optionV);
  const [playerInfo, setPlayerInfo] = useState({
    id: 8733,
    Name: '',
    Faceid: '',
    Country: '',
  });

  
  const carrerStats = async (result) => {  //populating stats 2d array Dont make 2
    const stat = [[]];
    const l = ['Field', 'Test', 'Odi', 'T20', 'Ipl'];
    stat.push(l);

    for (let i = 0; i < result.values.length; i++) {
      const list = [];
      for (let j = 0; j < result.values[i].values.length; j++) {
        list.push(result.values[i].values[j]);
      }
      stat.push(list);
    }

    setStats(stat);
    console.log(stat);
  };

  const getData = async () => {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerInfo.id}/${mode}`;
    console.log(url);

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '31404b3dd1msh34e2a69d4cf0da2p1884c7jsn0020f6526ba2',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const battingResult = await response.json();
      console.log(battingResult);
      carrerStats(battingResult);
    } catch (error) {
      console.error(error);
    }
  };

  const getBattingData = ()=>{ setMode('batting');   getData()  }

  const getBowlingData = () => { setMode('bowling');  getData(); };

  

  return (
    <>
    
  <SearchBox playerName={playerName} setPlayerInfo={setPlayerInfo} setPlayerName={setPlayerName} />
  <div class='flex flex-col md:flex-row h-screen  '> 

  <div class='flex w-full md:w-1/3 bg-pink-500' style={ { backgroundColor:'pink'} }>
  <Playerprofile  playerId = {playerInfo.id} /> 
  </div>

    <div class='flex-1 flex flex-col items-center' style={ {backgroundColor:'green'}} > 
  <h1>{playerInfo.Name}</h1>
      {/* <h1>{playerInfo.id}</h1> */}
      {/* <h1>{playerInfo.teamName}</h1> */}

       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2" onClick={getBattingData}>Batting</button>
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2 " onClick={getBowlingData}>Bowling</button>  
    {/* <GetBatBowlData  stats={stats} setStats={setMode} playerInfo={playerInfo} mode={mode}  setMode={setMode}  /> */}

      <Selectbar  find = {find} setFind={setFind}  />
   
      <Graph  stats={stats} setStats={setStats}  find = {find}  />

      </div>
 

      
      </div>


      {/* <ReactEcharts option={optionVal} style={{ width: '400px', height: '400px' }} /> */}
 
    </>
  );
}


/*
-Update Bowling Paramaters/ different for batting and bowling   done {BUT UGLY CODE}
- button onClick={} <option onChange={} > </option> /button
- card 
- news ... ?
- realtime match overs ?  api problem 
- compare 2 player 

*/ 