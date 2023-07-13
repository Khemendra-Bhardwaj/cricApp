import React,{useState} from 'react'


const TableData = ({playerInfo})=>{

return (
  <>
  
  <table class="table-fixed w-full border border-collapse">
  <thead>
    <tr>
      <th class="w-1/2 py-2 px-4 border border-gray-300">Player Question</th>
      <th class="w-1/2 py-2 px-4 border border-gray-300">Answer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="w-1/2 py-2 px-4 border border-gray-300">Country</td>
      <td class="w-1/2 py-2 px-4 border border-gray-300"> {playerInfo.intlTeam}  </td>
    </tr>
    <tr>
      <td class="w-1/2 py-2 px-4 border border-gray-300">DoB</td>
      <td class="w-1/2 py-2 px-4 border border-gray-300"> {playerInfo.DoBFormat}  </td>
    </tr>
    <tr>
      <td class="w-1/2 py-2 px-4 border border-gray-300">Height</td>
      <td class="w-1/2 py-2 px-4 border border-gray-300"> {playerInfo.height } </td>
    </tr>
    <tr>
      <td class="w-1/2 py-2 px-4 border border-gray-300">Bat Arm</td>
      <td class="w-1/2 py-2 px-4 border border-gray-300">  {playerInfo.bat } </td>
    </tr>
    <tr>
      <td class="w-1/2 py-2 px-4 border border-gray-300">Bowl Arm</td>
      <td class="w-1/2 py-2 px-4 border border-gray-300"> {playerInfo.bowl }  </td>
    </tr>
  </tbody>
</table>

  
  
  </>
)
  
}



export default function Playerprofile({playerId}) {
  // const img_src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuvD9dyBEWQb4zgRaa9Jf3-xUSNWZJzGk2K2D6zgHjA&s'
  const [playerInfo, setPlayerInfo] = useState({
    id:100,
    height:100,
    bat : 'right',
    bowl :'right',
    intlTeam:'xyz',
    DoBFormat : 'xyz',
    image : 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg' 

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
        height: result.height ,
        intlTeam:result.intlTeam,
        DoBFormat : result.DoBFormat,
        image : result.image 
        
      }
    )
    console.log(playerInfo);
  } catch (error) {
    console.error(error);
  }
}




  return (
<>

<div
  class="block rounded-lg  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <a href="#!">
    <img
      class=" w-200 h-200 "
      src= {playerInfo.image}
      alt="" />
  </a>
  <div class="p-6">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Player Data 
    </h5>


    <TableData playerInfo={playerInfo}/> 


    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light"  onClick={LoadPlayerInfo} >
      Button
    </button>
  </div>
</div>












</>
  )
}
