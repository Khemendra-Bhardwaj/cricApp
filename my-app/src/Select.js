import React from "react";

export default function Selectbar({ find, setFind }) {
  // const [find, setFind] = useState('Matches');
  return (
    <>
      <div class="flex items-center gap-2 ">
        <select
          name="field"
          value={find}
          onChange={(e) => setFind(e.target.value)}
          class="block w-full px-4 py-2 w-3/12  mt-1 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Matches" >Matches</option>
          <option value="Innings"  >Innings</option>
          <option value="Runs">Runs</option>
          <option value="Highest" >Highest</option>
          <option value="Average">Average</option>
          <option value="SR">SR</option>
          <option value="Fours">Fours</option>
          <option value="Sixes">Sixes</option>
        </select>

        <select
          name="field"
          value={find}
          onChange={(e) => setFind(e.target.value)}
          class="block w-full px-4 py-2 w-3/12 mt-1 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Matches">Matches</option>
          <option value="Innings">Innings</option>
          <option value="Runs">Runs</option>
          <option value="Balls">Balls</option>
          <option value="Maidens">Maidens</option>
          <option value="Avg">Avg</option>
          <option value="5w">5w</option>
          <option value="SR">SR</option>
          <option value="10w">10w</option>
        </select>
      </div>
    </>
  );
}
