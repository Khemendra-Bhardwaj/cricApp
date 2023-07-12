import React,{useEffect,useState} from 'react'

export default function Playerprofile({playerId}) {
  const [playerInfo, setPlayerInfo] = useState({
    id:100,
    height:100,
    bat : 'right',
    bowl :'right'

  })

  const LoadPlayerInfo = async ()=>{
  const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerId}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '31404b3dd1msh34e2a69d4cf0da2p1884c7jsn0020f6526ba2',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setPlayerInfo(
      {
        id:result.id,
        bat: result.bat,
        bowl:result.bowl,
        height: result.height 
        
      }
    )
    console.log(playerInfo);
  } catch (error) {
    console.error(error);
  }
}




  return (
<>

<div className="bg-white shadow overflow-hidden sm:rounded-lg w-2/5">
      <div className="flex">
        <div className="flex-shrink-0">
          <img className="h-48 w-48 object-cover" src="" alt="..." />
        </div>

        <div className="px-4 py-2">
          <h3 className="text-lg font-medium text-gray-900">Player Name </h3>
          <p className="text-gray-500">
            {playerInfo.id}
          </p>
          <p className="text-gray-500">
        {playerInfo.bat}
          </p>
          <p className="text-gray-500">
          {playerInfo.bowl}
          </p>
          <p className="text-gray-500">
          { playerInfo.height }
          </p>
      
        </div>
      </div>
</div>
<button onClick={LoadPlayerInfo}> Get Info  </button>



</>
  )
}
