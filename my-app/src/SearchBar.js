import React, {useState} from 'react'


export default function SearchBar() {

  

    const [playerName, setPlayerName] = useState('Joe root');   //1413
    const [stats, setStats] = useState([[]] )

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
        const getPlayer = await getThatPlayer(result); 

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

    const PrintBattingStats= ()=>{
      return (
        <div>
        <h1>Data Values</h1>
        {stats.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((item, columnIndex) => (
              <span key={columnIndex}>
                {item}
                {columnIndex !== row.length - 1 && <>&nbsp;&nbsp;&nbsp;</>}
              </span>
            ))}
            <br />
          </div>
        ))}
      </div>
      );
    }

  const getBattingData = async()=>{
    
  const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerInfo.id}/batting`;
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
      {/* <h1>  Matches : Test  { } </h1>*/}
        

        <button onClick={getBattingData} >  Batting  </button>
        <button onClick={getBowlingData} > Bowling </button>
        
      <PrintBattingStats />

    </>
  )
}
