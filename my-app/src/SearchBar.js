import React, { useState } from 'react';
// import ReactEcharts from 'echarts-for-react';
import DisplayGraph  from './DisplayGraph';
import ReactEcharts from 'echarts-for-react';

export default function SearchBar() {



  const [playerName, setPlayerName] = useState('Joe root');
  const [stats, setStats] = useState([[]]);
  const [mode, setMode] = useState('batting');
  const [find, setFind] = useState('Matches');
  // const [showGraph, setShowGraph] = useState(0)
  const [playerInfo, setPlayerInfo] = useState({
    id: 8733,
    Name: '',
    Faceid: '',
    Country: '',
  });
 // SEARCH API 1 For PLAYER NAME 
  const handleSearch = async () => {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search?plrN=${playerName}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '31404b3dd1msh34e2a69d4cf0da2p1884c7jsn0020f6526ba2',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      await getThatPlayer(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getThatPlayer = async (result) => {
    console.log('searching ...');
    setPlayerInfo({
      id: result.player[0].id,
      Name: result.player[0].name,
      Faceid: result.player[0].faceImageId,
      Country: result.player[0].teamName,
    });
  };

  const battingStats = async (result) => {  //populating stats 2d array Dont make 2
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
      battingStats(battingResult);
    } catch (error) {
      console.error(error);
    }
  };

  const getBattingData = ()=>{
    setMode('batting')
    getData() 
  }

  const getBowlingData = () => {
    setMode('bowling');
    getData();
  };


  // const displayGraphBowl = () => {
  //   console.log('finding '  + findBowl );

  //   for (let j = 0; j < stats.length; j++) {
  //     if (stats[j][0] === findBowl) {
  //       const newData = stats[j].slice(1);
  //       console.log('=> ' + findBowl + '  ' + newData);
  //       const optionVv = {
  //         legend: {},
  //         tooltip: {},
  //         dataset: {
  //           dimensions: ['product', 'Test', 'Odi', 'T20', 'Ipl'],
  //           source: [
  //             {
  //               product: 'Format',
  //               'Test': `${newData[0]}`,
  //               'Odi': `${newData[1]}`,
  //               'T20': `${newData[2]}`,
  //               'Ipl': `${newData[3]}`,
  //             },
  //           ],
  //         },
  //         xAxis: { type: 'category' },
  //         yAxis: {},
  //         series: [
  //           { type: 'bar' },
  //           { type: 'bar' },
  //           { type: 'bar' },
  //           { type: 'bar' },
  //         ],
  //       };

  //       setOptionVal(optionVv);
  //       break;
  //     }
  //   }
  // };
  const displayGraph = ()=>{
    // setShowGraph(1);
    console.log('displaying ....');
  //  return ( <> <DisplayGraph find={find} stats={stats} x={ReactEcharts} /> 
   {/* </> ) */}
  }

  return (
    <>
      Search:{' '}
      <input
        type="text"
        placeholder="enter Player name"
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>

      <h1>{playerInfo.Name}</h1>
      <h1>{playerInfo.id}</h1>
      <h1>{playerInfo.teamName}</h1>

      <button onClick={getBattingData}>Batting</button>
      <button onClick={getBowlingData}>Bowling</button>

      <select
        name="field"
        value={find}
        onChange={(e) => setFind(e.target.value)}
      >
        <option value="Matches">Matches</option>
        <option value="Innings">Innings</option>
        <option value="Runs">Runs</option>
        <option value="Highest">Highest</option>
        <option value="Average">Average</option>
        <option value="SR">SR</option>
        <option value="Fours">Fours</option>
        <option value="Sixes">Sixes</option>
      </select>

      <select
        name="field"
        value={find}
        onChange={(e) => setFind(e.target.value)}
      >
        <option value="Matches">Matches</option>
        <option value="Innings">Innings</option>
        <option value="Runs">Runs</option>
        <option value="Balls">Balls</option>
        <option value="Maidens">Maidens</option>
        <option value="Avg">Avg</option>
        <option value="5w">5w</option>
        <option value="SR">SR</option>
        <option value="10w"> 10w </option>
      </select>




      {/* <button onClick={displayGraph}>Show Graph </button> */}
      {/* {displayGraph()} */}
      {/* <button onClick={displayGraphBowl }>Show Graph bowling </button> */}
        {/* {displayGraph} */}
      {/* <DisplayGraph find={find} stats={stats} x={ReactEcharts} />  */}
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