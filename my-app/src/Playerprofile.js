import React from 'react';

const TableData = ({ playerInfo }) => {
  return (
    <>
      <table className="ml-10">
        <thead>
          <tr>
            <th className="w-1/2 py-2 px-4 border border-gray-300">Player Question</th>
            <th className="w-1/2 py-2 px-4 border border-gray-300">Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-1/2 py-2 px-4 border border-gray-300">Country</td>
            <td className="w-1/2 py-2 px-4 border border-gray-300">{playerInfo.intlTeam}</td>
          </tr>
          <tr>
            <td className="w-1/2 py-2 px-4 border border-gray-300">DoB</td>
            <td className="w-1/2 py-2 px-4 border border-gray-300">{playerInfo.DoBFormat}</td>
          </tr>
          <tr>
            <td className="w-1/2 py-2 px-4 border border-gray-300">Height</td>
            <td className="w-1/2 py-2 px-4 border border-gray-300">{playerInfo.height}</td>
          </tr>
          <tr>
            <td className="w-1/2 py-2 px-4 border border-gray-300">Bat Arm</td>
            <td className="w-1/2 py-2 px-4 border border-gray-300">{playerInfo.bat}</td>
          </tr>
          <tr>
            <td className="w-1/2 py-2 px-4 border border-gray-300">Bowl Arm</td>
            <td className="w-1/2 py-2 px-4 border border-gray-300">{playerInfo.bowl}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default function Playerprofile({ playerId, playerProfileData }) {
  return (
    <>
      {playerProfileData && (
        <div className="block rounded-sm ml-auto mr-auto bg-white shadow-[0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)] dark:bg-neutral-700">
          {playerProfileData.image && (
            <img className="mx-auto w-full h-auto rounded-full max-w-xs" src={playerProfileData.image} alt="" />
            )}
          <div className="p-6">
            <TableData playerInfo={playerProfileData} />
          </div>
        </div>
      )}
    </>
  );
}
