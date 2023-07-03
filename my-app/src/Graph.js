import React from 'react'
import ReactEcharts from 'echarts-for-react';
export default function Graph({find,stats,setStats,optionVal,setOptionVal }) {
    
    const displayGraph = () => {
        console.log('finding ' +  find  );
    
        for (let j = 0; j < stats.length; j++) {
          if (stats[j][0] === find) {
            const newData = stats[j].slice(1);
            console.log('=> ' + find + '  ' + newData);
            const optionVv = {
              legend: {},
              tooltip: {},
              dataset: {
                dimensions: ['product', 'Test', 'Odi', 'T20', 'Ipl'],
                source: [
                  {
                    product: 'Format',
                    'Test': `${newData[0]}`,
                    'Odi': `${newData[1]}`,
                    'T20': `${newData[2]}`,
                    'Ipl': `${newData[3]}`,
                  },
                ],
              },
              xAxis: { type: 'category' },
              yAxis: {},
              series: [
                { type: 'bar' },
                { type: 'bar' },
                { type: 'bar' },
                { type: 'bar' },
              ],
            };
    
            setOptionVal(optionVv);
            break;
          }
        }
        
      };

  return (
    <>

    <button onClick={displayGraph}>Show Graph </button>
     <ReactEcharts option={optionVal} style={{ width: '400px', height: '400px' }} />
 
    {/* <p> hehe  </p> */}
    </>
  )
}
