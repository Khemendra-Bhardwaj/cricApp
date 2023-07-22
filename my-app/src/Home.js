import React, {useState} from 'react'
import { Route, Routes , Navigate, Link} from 'react-router-dom'

import Icc from './images/icc.jpeg'
import News from './images/news.jpeg'
import Matches  from './images/matches.jpeg'
import Person from './images/person.jpeg'
import Team from './images/teams.jpeg'
import Compare from './images/compare.jpeg'
// import ImgOne from './images/one.jpg'


const DisplayTab = ({Field})=>{
 const url = Field.img 
return (
 
    <>
<div class="max-w-sm bg-white border border-gray-200 rounded-sm shadow dark:bg-white-800 dark:border-gray-700">
      
        <img class="rounded-t-sm  w-full h-36  ml-auto mr-auto  " src= { url } alt="" />
    
    <div class="p-5 ">
        <Link to=  {'/' + Field.id}  >
            <h5 class="mb-2 text-2xl font-bold font-sans tracking-tight text-black-900 dark:text-black   " > {Field.heading} </h5>
        </Link>
        <p class="mb-3 font-sans text-xl-base dark:text-black-400"> {Field.subHeading} </p>
       
    </div>
</div>
</> 
)
}

export  const NavBar = ()=>{

  const clipboard = ()=>{
    navigator.clipboard.writeText('http://localhost:3000/');
    alert('WebSite Link Copied Share with your friend ')
  }
  
  return (
    <>

<header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02" >
    <Link to ='/home' >
    <h1 class="p-4 font-semibold text-lg  border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active ">
        
          CricApp 
            
    </h1>
    </Link>
  
    <nav class="nav font-bold text-lg">
        <ul class="flex items-center  ">
          <div> 
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <button onClick={ clipboard }> Share</button> 
            </li>
            </div> 
            <div> 
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="https://github.com/Khemendra-Bhardwaj">Developer </Link> 
            </li>
            </div>  <div> 
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/">Login </Link>
            </li>
            </div>  <div> 
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/">SignUp </Link>
            </li>
            </div> 
        </ul>
    </nav>

</header>
    </>
  )
}


const Card = ({Field})=>{
  // const url  = Field.src 
  return (
    <>
    <div class="w-1/2  rounded-lg shadow-xl bg-white transition duration-500 hover:scale-110 ml-auto mr-auto  ">

 
  <header class=" text-2xl font-semibold font-bold font-sans p-4 ml-16 " >  {Field.heading}</header>
  <div class="px-5  ">
    <p class="text-gray-500 ml-auto mr-auto text-lg  ">
    {Field.subHeading}
    </p>
  </div>
  
  <footer class="text-right py-3 px-8 text-gray-500">
  <Link to=  {'/' + Field.id}  >
    <div class='ml-auto mr-auto '> 
    <button
      class="py-2 px-4 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600  "
    >
      {Field.heading}
    </button>
    </div>
    </Link>
  </footer>
</div>
 
    </>
  )
}



export default function Home() {



    return (
    <>
  <div  class='my-5'>  
      <NavBar  /> 
</div> 


<div class='grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-20  mr-auto  justify-center'> 
<div class=' ml-auto mr-auto  ' >
<Card Field={ {heading : 'Search Cricketer', subHeading : 'Discover the impressive career statistics of a well-known cricketer through clear and straightforward graphs, making it easier to understand their achievements in the game.', id: 'search-player', img : Person }  }/> 
</div>
{/* <div class=' ml-auto mr-auto ' >
<Card Field={ {heading : 'Matches', subHeading : 'Get To Know about any upcoming matches and series between any 2 nations', id: 'matches'  , img : Matches }  }/> 
</div> */}
{/* <div class=' ml-auto mr-auto ' > 
<Card Field={ {heading : 'Teams ', subHeading : 'Search About current Team , get to know their current playing 11 and reserves ', id: 'teams' , img : Team  }  }/> 
</div> */}
<div class=' ml-auto mr-auto mt-8' > 
<Card Field={ {heading : 'News ', subHeading : 'Stay up-to-date with the latest cricketing news, player updates, cricket board announcements, and much more with our comprehensive platform. Get all the cricketing insights you need !   ', id: 'news', img : News }  }/> 
</div>
<div class=' ml-auto mr-auto mt-8' >  
<Card Field={ {heading : 'ICC Ranking ', subHeading : ' Easily access the current ICC rankings of players in all three formats - T20, Test, and ODI, and stay informed about the top performers across the cricket world.   ', id: 'icc', img : Icc }  }/> 
</div>
{/* <div class=' ml-auto mr-auto mt-8' > 
<Card Field={ {heading : 'Compare Players ', subHeading : ' Draw a comparision with graphical data among players on various parameters   ', id: 'compare-players' , img : Compare  }  }/> 
</div>  */}
</div> 
{/* <Card Field={ {heading : 'News ', subHeading : 'Latest Cricketing News and player updates and much more ...  ', id: 'news', img : News } } /> */}


    </> 
  )
}





