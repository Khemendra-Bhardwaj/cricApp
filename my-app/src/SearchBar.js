import React, {useState} from 'react'


export default function SearchBar() {

    const [playerName, setPlayerName] = useState('Joe root');
    const [playerInfo, setPlayerInfo] = useState({
      id:'',
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



  return (
    <>
       Search: <input type="text" placeholder="enter Player name" onChange={(e) => setPlayerName(e.target.value)} />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>

        <h1>  {playerInfo.Name} </h1> 
        <h1>  {playerInfo.id} </h1>
        <h1>  {playerInfo.teamName} </h1>



    </>
  )
}
