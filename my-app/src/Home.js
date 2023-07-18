import React, {useState} from 'react'

const DisplayTab = ({Field})=>{
return (
    <>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img class="rounded-t-lg" src="" alt="" />
    
    <div class="p-5">
        <button  >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white "> {Field.heading} </h5>
        </button>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {Field.subHeading} </p>
       
    </div>
</div>
</> 
)
}
export default function Home() {



    return (
    <>
<div class='grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-5 ml-5'> 
<DisplayTab Field={ {heading : 'Search Cricketer', subHeading : 'Search About any Cricketer , loads His/Her Career Stats in Graphical format'}  }/> 
<DisplayTab Field={ {heading : 'Upcoming Matches', subHeading : 'Get To Know about any upcoming matches and series '}  }/> 
<DisplayTab Field={ {heading : 'Teams ', subHeading : 'Search About current Team , get to know their current playing 11 and reserves '}  }/> 
<DisplayTab Field={ {heading : 'News ', subHeading : 'Latest Cricketing News and player updates and much more ...  '}  }/> 
<DisplayTab Field={ {heading : 'ICC Ranking ', subHeading : ' Get the current ICC ranking of players   '}  }/> 
<DisplayTab Field={ {heading : 'Compare Players ', subHeading : ' Draw a comparision with graphical data among players on various parameters   '}  }/> 
</div> 
    </> 
  )
}
