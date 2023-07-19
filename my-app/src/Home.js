import React, {useState} from 'react'
import { Route, Routes , Navigate, Link} from 'react-router-dom'

const DisplayTab = ({Field})=>{
 
return (
 
    <>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img class="rounded-t-lg" src="" alt="" />
    
    <div class="p-5">
        <Link to=  {'/' + Field.id}  >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white " > {Field.heading} </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {Field.subHeading} </p>
       
    </div>
</div>
</> 
)
}





export default function Home() {



    return (
    <>

{/* <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> */}



<div class='grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-5 ml-5 justify-center'> 
<DisplayTab Field={ {heading : 'Search Cricketer', subHeading : 'Search About any Cricketer , loads His/Her Career Stats in Graphical format', id: 'search-player'}  }/> 
<DisplayTab Field={ {heading : 'Upcoming Matches', subHeading : 'Get To Know about any upcoming matches and series ', id: 'matches'}  }/> 
<DisplayTab Field={ {heading : 'Teams ', subHeading : 'Search About current Team , get to know their current playing 11 and reserves ', id: 'teams'}  }/> 
<DisplayTab Field={ {heading : 'News ', subHeading : 'Latest Cricketing News and player updates and much more ...  ', id: 'news'}  }/> 
<DisplayTab Field={ {heading : 'ICC Ranking ', subHeading : ' Get the current ICC ranking of players   ', id: 'icc'}  }/> 
<DisplayTab Field={ {heading : 'Compare Players ', subHeading : ' Draw a comparision with graphical data among players on various parameters   ', id: 'compare-players'}  }/> 
</div> 
    </> 
  )
}
