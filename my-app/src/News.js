import React,{useState,useEffect} from 'react'

const NewsComponent = ({News_data})=>{
    return (
        <>
            
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg  ml-auto mr-auto  shadow dark:bg-gray-800 dark:border-gray-700 mt-6">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {News_data.hline}  </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {News_data.intro}   </p>
        {
            (News_data.pubTime) && <p> Pulished At : {News_data.pubTime} </p>
        }
    </div>

        </>
    )
}





export default function News() {
    const [newsList, setNewsList] = useState([{},{},{}]) 

    const loadNews = async()=>{
        const url = 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index';
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
        for(let i=0;i<result.storyList.length;i++){
           if(result.storyList[i].story){
            currList.push(
        {
                hline : result.storyList[i].story.hline,
                intro : result.storyList[i].story.intro,
                pubTime : result.storyList[i].pubTime,
                context : result.storyList[i].context
        }
            )
           }
        }
        console.log(currList);
    
        setNewsList(currList)
    
    
    
    } catch (error) {
        console.error(error);
    }
    }
    
    useEffect(() => {
      loadNews() 
      console.log('News Loaded ');
    }, [])


  return (
   <>
    <div class='grid md:grid-cols-1 sm:grid-cols-1 place-items-center mt-4 '> 
  {  newsList.map( (x)=>{
        return  <div class='mt-3 w-full' > <NewsComponent News_data={x} /> </div> 
    } )}
  </div>
    
   
   </>
  )
}
