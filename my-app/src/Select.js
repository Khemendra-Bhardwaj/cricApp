import React  from 'react'

export default function Selectbar( {find,setFind} )   {
  // const [find, setFind] = useState('Matches');
  return (
    <>
    
    <select
        name="field"
        value={find}
        onChange={(e) => setFind(e.target.value)}
      >
        <option value="Matches">Matches</option>
        <option value="Innings">Innings</option>
        <option value="Runs">Runs</option>
        <option value="Highest">Highest</option>
        <option value="Average">Average</option>
        <option value="SR">SR</option>
        <option value="Fours">Fours</option>
        <option value="Sixes">Sixes</option>
      </select>

      <select
        name="field"
        value={find}
        onChange={(e) => setFind(e.target.value)}
      >
        <option value="Matches">Matches</option>
        <option value="Innings">Innings</option>
        <option value="Runs">Runs</option>
        <option value="Balls">Balls</option>
        <option value="Maidens">Maidens</option>
        <option value="Avg">Avg</option>
        <option value="5w">5w</option>
        <option value="SR">SR</option>
        <option value="10w"> 10w </option>
      </select>


    
    </>
  )
}
