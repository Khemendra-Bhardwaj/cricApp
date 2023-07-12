import React from 'react'

export default function GetBatBowlData({stats,setStats,playerInfo,mode,setMode}) {

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
          const Result = await response.json();
          console.log(Result);
          carrerStats(Result);
        } catch (error) {
          console.error(error);
        }
      };


    const getBattingData = ()=>{ setMode('batting');   getData()  }

    const getBowlingData = () => { setMode('bowling');  getData(); };
  

  return (
   <>
    <button onClick={getBattingData}>Batting</button>
    <button onClick={getBowlingData}>Bowling</button>
    
   </>
  )
}


// i guess after manuipulating stats here it is unable to show outside 
// may  be  a copy is created here 
// can try & check  with local eg or gpt 
