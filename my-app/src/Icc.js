import React, { useEffect, useState } from 'react';
import { NavBar } from './Home';

const Rank_Player_profile = ({ Ranking_stats }) => {
  return (
    <>
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-32 h-32 rounded-full"
              src={`http://i.cricketcb.com/stats/img/faceImages/${Ranking_stats.id}.jpg`}
              alt="Rank List "
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-md text-black-500 truncate dark:text-black-400">{Ranking_stats.rating}</p>
            <p className="text-md text-black-500 truncate dark:text-black-400">{Ranking_stats.lastUpdatedOn}</p>
            <p className="text-md text-black-500 truncate dark:text-black-400">{Ranking_stats.country}</p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-black-900 dark:text-black">
            {Ranking_stats.rank}
          </div>
        </div>
      </li>
    </>
  );
};

const Ranking_list = ({ Ranking_stats }) => {
  return (
    <>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 transition duration-500 hover:scale-110 rounded-lg ml-auto mr-auto shadow sm:p-8 dark:bg-white-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-black-900 dark:text-black">{Ranking_stats.name}</h5>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-black-200 dark:divide-black-700">
            <Rank_Player_profile Ranking_stats={Ranking_stats} />
          </ul>
        </div>
      </div>
    </>
  );
};



const Icc = () => {
  const [rankList, setRankList] = useState([]);
  const [type, setType] = useState('test');

  const load_icc = async () => {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=${type}`;
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

      const currList = [];
      for (let i = 0; i < result.rank.length; i++) {
        currList.push({
          rank: result.rank[i].rank,
          name: result.rank[i].name,
          id: result.rank[i].id,
          rating: result.rank[i].rating,
          points: result.rank[i].points,
          country: result.rank[i].country,
        });
      }
      console.log(currList);
      setRankList(currList);
    } catch (error) {
      console.error(error);
    }
  };

  const Formats = ()=>{
    return (
        <>
    <div> 
      <button
        className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => {
            setType('test');
            load_icc();
          }}   
      >
        Test
      </button>
      </div> 

      <div> 
      <button
        className="bg-transparent hover:bg-green-500  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => {
            setType('odi');
            load_icc();
          }}
      >
        Odi
      </button>
      </div> 
      <div> 
      <button
        className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => {
            setType('t20');
            load_icc();
          }}
      >
        T20
      </button>
      </div> 
      
        </>
    )
}


  useEffect(() => {
    load_icc();
  }, [type]);

  return (
    <> 

    <NavBar />
    
     <div> 
         <div class='grid grid-cols-3 mt-6 place-items-center '> 
        <Formats /> 
      </div>  
      
      <div className="grid md:grid-cols-5 sm:grid-cols-1 place-items-center mt-10 gap-2 ">
        {rankList.map((x) => {
          return (
            <div className="mt-3 w-full">
              <Ranking_list Ranking_stats={x} />
            </div>
          );
        })}
      </div>
      
       



      </div> 
      
    </>
  );
};

export default Icc;
