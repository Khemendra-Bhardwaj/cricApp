import React from 'react'

export default function SearchBox({playerName, setPlayerInfo, setPlayerName}) {

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



  return (
    <>
    

    <div  style={ {
      marginBottom:'50px',
      marginTop:'30px'
    } }> 
  {/* <h1 class="text-3xl font-bold mb-4">Search:</h1> */}
<input
  type="text"
  placeholder="Enter Player name"
  class="border border-gray-300 rounded-md px-4 py-2 w-3/4 w-full ml-5 mb-4 "
  onChange={(e) => setPlayerName(e.target.value)}
/>

<button
  type="submit"
  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 ml-1 border border-blue-500 hover:border-transparent rounded"
  onClick={handleSearch}
>
  Search
</button>



      </div>


    </>
  )
}
