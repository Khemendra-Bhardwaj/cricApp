import React, {useEffect ,useState} from 'react'


const Rank_Player_profile = ({Ranking_stats})=>{
    // const url = `http://i.cricketcb.com/stats/img/faceImages/${id}.jpg` 

    return (
        <>
             <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-32 h-32 rounded-full" src= {`http://i.cricketcb.com/stats/img/faceImages/${Ranking_stats.id}.jpg` }  alt="Rank List "/>
                    </div>
                    <div class="flex-1 min-w-0">
                       
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {Ranking_stats.rating}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {Ranking_stats.lastUpdatedOn}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {Ranking_stats.country}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       {Ranking_stats.rank}
                    </div>
                </div>
            </li>
        
        </>
    )
}


const Ranking_list = ({Ranking_stats})=>{
    return (
        <>
        
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg ml-auto mr-auto  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">  {Ranking_stats.name} </h5>
        
    </div>
    <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <Rank_Player_profile  Ranking_stats ={Ranking_stats}  />
            </ul>
    </div>
    </div>

        </>
    )
}


export default function Icc() {
    const [rankList, setRankList] = useState([])
    const [type, setType] = useState('test')


    const load_icc = async()=>{
    const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=${type}`;
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
        // console.log(result);
        const currList = []
        for(let i=0;i<result.rank.length;i++){
            currList.push(

                    {
                        rank : result.rank[i].rank,
                        name : result.rank[i].name,
                        id: result.rank[i].id , 
                        rating : result.rank[i].rating,
                        points : result.rank[i].points,
                        country :  result.rank[i].country 
                    }

            )
        }
        console.log(currList);
        setRankList(currList) 


    } catch (error) {
        console.error(error);
    }
    }


    useEffect(() => {
      load_icc()
    } ,[])

    



  return (
  <>
  <div class='grid md:grid-cols-5 sm:grid-cols-1 place-items-center mt-10 gap-2 '>
  {
    rankList.map( (x)=>{
       return  <div class='mt-3 w-full'>  <Ranking_list  Ranking_stats ={x}  /> </div>
    } )
  }
  </div>

  
  <button  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"   >
  Test
</button>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  >
  Odi
</button>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >
  T20
</button>

    
  </>
  )
}
