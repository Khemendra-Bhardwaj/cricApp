import React, {useState} from 'react'
import ReactEcharts from "echarts-for-react"; 


export default function SearchBar() {
  // const [currData, setcurrData] = useState([0,0,0,0])
  // const [showFormats, setShowFormats] = useState(0)
  const  optionV = {
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['product', 'Test', 'Odi', 'T20','Ipl'],
      source: [
        { product: 'Matcha Latte', 'Test': 0, 'Odi': 0, 'T20': 0 ,'Ipl': 0 },
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{ type: 'bar' }]
  };
    const [playerName, setPlayerName] = useState('Joe root');   //1413
    const [stats, setStats] = useState([[]] )
    const [mode, setMode] = useState('batting')
    const [find, setFind] = useState('Matches')
    
    const [optionVal, setOptionVal] = useState(optionV)
   

    const [playerInfo, setPlayerInfo] = useState({
      id:8733,
      Name:'',
      Faceid :'',
      Country : ''
    })

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
        // const result = await response.text();
        const result  = await response.json();
        console.log(result);
        await getThatPlayer(result); 

      } catch (error) {
        console.error(error);
      }
    };

    const getThatPlayer = async (result)=>{
      console.log('searching ...');
      setPlayerInfo({
        id: result.player[0].id,
                Name : result.player[0].name,
                Faceid : result.player[0].faceImageId,
                Country : result.player[0].teamName 
      })
    }

    const battingStats =  async (result)=>{
      //  for(let i=0;i<)
      const stat = [[]]
      const l = ['Field','Test','Odi','T20','Ipl'];
      stat.push(l)

      for(let i=0;i<result.values.length;i++){
          const list = []
        for(let j=0;j< result.values[i].values.length;j++ ){
          list.push(  result.values[i].values[j] );
        }
        stat.push(list)
      }
      
      setStats(stat)
      console.log(stat);
    }

    // const PrintBattingStats= ()=>{
    //   return (
    //     <div>
    //     <h1>Data Values</h1>
    //     {stats.map((row, rowIndex) => (
    //       <div key={rowIndex}>
    //         {row.map((item, columnIndex) => (
    //           <span key={columnIndex}>
    //             {item}
    //             {columnIndex !== row.length - 1 && <>&nbsp;&nbsp;&nbsp;</>}
    //           </span>
    //         ))}
    //         <br />
    //       </div>
    //     ))}
    //   </div>
    //   );
    // }

  const getData = async()=>{
    // setShowFormats(1); 
  const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerInfo.id}/${mode}`;
  console.log(url);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '31404b3dd1msh34e2a69d4cf0da2p1884c7jsn0020f6526ba2',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const battingResult = await response.json();
    console.log(battingResult);
    battingStats(battingResult); 
    // printBattingStats();
  } catch (error) {
    console.error(error);
  }

    }

    const getBowlingData= ()=>{
      setMode('bowling')
      getData()
    }

  
    const displayGraph=   async( )=>{
      console.log('finding ' + find);
     
      // const x = []
      for (let j = 0; j < stats.length; j++) {

        if (stats[j][0] === find) {
          const newData = [...stats[j].slice(1)];
          console.log('=> '+  find + '  ' + newData);
          const  optionVv = {
            legend: {},
            tooltip: {},
            dataset: {
              dimensions: ['product', 'Test', 'Odi', 'T20','Ipl'],
              source: [
                { product: 'Format', 'Test': `${newData[0]}`, 'Odi': `${newData[1]}`, 'T20': `${newData[2]}` ,'Ipl': `${newData[3]}` },
              ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{ type: 'bar' }]
          };
  
  
          setOptionVal(optionVv)

          break;
        }
      }
      
     
        
       
    }


  return (
    <>
       Search: <input type="text" placeholder="enter Player name" onChange={(e) => setPlayerName(e.target.value)} />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>

        <h1>  {playerInfo.Name} </h1> 
        <h1>  {playerInfo.id} </h1>
        <h1>  {playerInfo.teamName} </h1> 
    

        <button onClick={getData}  >  Batting  </button>
        <button onClick={getBowlingData} > Bowling </button>
        
       
      <select name="field" value={find} onChange={e=> setFind(e.target.value)  }  >
      <option value="Matches"  >Matches</option>
      <option value="Innings"  >Innings</option>
      <option value="Runs"  >Runs</option>
      <option value="Highest"  >Highest</option>
      <option value="Average"  >Average</option>
      <option value="SR"  >SR</option>
      <option value="Fours"  >Fours</option>
      <option value="Sixes"  >Sixes</option>
    </select>
   
      {/* {displayGraph} */}
      <button onClick={displayGraph}> Show Graph  </button>
      <ReactEcharts  option={optionVal}  style={ {width:'400px', 'height':'400px'} } />  


    </>
  )
}


/* 

Field   Test   Odi   T20   Ipl
Matches     90   350   98   250
Innings     144   297   85   218
Runs    4876   10773   1617   5082
Balls     8248   12303   1282   3739
Highest     224   183   56   84
Average     38.09   50.58   37.6   38.79
SR         59.12   87.56   126.13   135.92
Not Out     16   84   42   87
Fours     544   826   116   349
Sixes     78   229   52   239
Ducks     10   10   1   5
50s       33   73   2   24
100s      6   10   0   0
200s      1   0   0   0
300s      0   0   0   0
400s      0   0   0   0


comparision bar graph between test odi t20 and ipl

*/