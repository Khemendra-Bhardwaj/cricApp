import React, {useEffect, useState} from 'react'
import { NavBar } from './Home';

export default function SearchBox({playerName, setDisplayNone,  setPlayerInfo, setPlayerName, playerInfo , setPlayerProfileData , setLog_id, log_id}) {

    // initially Loading for KL rahul 
  
  // const [playerInfoD, setPlayerInfoD] = useState({
  //   id:-1,
  //   height:100,
  //   bat : 'right',
  //   bowl :'right',
  //   intlTeam:'xyz',
  //   DoBFormat : 'xyz',
  //   image : 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg' 

  // })


    // const loadGetInfoApi = async(id)=>{

    //   const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}`;   /// 2nd APi 
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': '31404b3dd1msh34e2a69d4cf0da2p1884c7jsn0020f6526ba2',
    //       'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    //     }
    //   };
      
    //   try {
    //     const response = await fetch(url, options);
    //     const result = await response.json();
    //     console.log(result);
    //     console.log('above result '); 
    //     // setLog_id(result.)
    //     // setPlayerInfoD(
    //     //   {
    //     //     id:result.id,
    //     //     bat: result.bat, 
    //     //     bowl:result.bowl,
    //     //     height: result.height ,
    //     //     intlTeam:result.intlTeam,
    //     //     DoBFormat : result.DoBFormat,
    //     //     image : result.image 
            
    //     //   }
    //     // )
    //     // setPlayerProfileData(playerInfoD)

    //     // console.log(playerInfo);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }



    //  Arena

    const handleSearch = async () => {
      if(playerName.length === 0 ){
        alert('Enter Something ') 

      }
      else{
        const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search?plrN=${playerName}`;  /// 1st Call 
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
          setLog_id(result.player[0].id)   // 1000 
            await getThatPlayer(result);
            setDisplayNone(2)  
          // setLog_id(8733)
        } catch (error) {
          console.error(error);
        }
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
          // may be -> log_id here is updated lately 
      };


      // useEffect(
      //   ()=>{
          
      //     console.log("loaded everything ... ");
      //     console.log('=>  ',  log_id  );
      //       loadGetInfoApi(log_id)    //1000
      //     // setPlayerProfileData(playerInfoD);  
          
      //   },[log_id ]
      // )



  return (
    <>
    
    <NavBar />
    <div  style={ {
      marginBottom:'50px',
      marginTop:'30px'
    } } class=' flex item-center container'  > 


<input
  type="text"
  placeholder="Enter Player name"
  class="border border-gray-300 rounded-md px-6 py-3 w-3/4 w-4/5 ml-5 mb-4 "
  onChange={(e) => setPlayerName(e.target.value)}
/>

<div class='ml-auto mr-auto '>
<button
  type="submit"
  class="bg-transparent hover:bg-blue-500 text-blue-900 font-semibold hover:text-white py-2 px-4 ml-1 border border-blue-500 hover:border-transparent rounded-lg w-60 h-12"
  onClick={handleSearch}
>
  Search
</button>
</div>



      </div>


    </>
  )
}
