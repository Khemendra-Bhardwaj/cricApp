import React,{useState,useEffect} from 'react'
import ReactEcharts from 'echarts-for-react';
export default function Graph({find,stats,setStats  }) {

  const optionV = {
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['product', 'Test', 'Odi', 'T20', 'Ipl'],
      source: [
        { product: 'Format', 'Test': 0, 'Odi': 0, 'T20': 0, 'Ipl': 0 },
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

  const optionVvPie = {
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 0,
            name: 'Test'
          },
          {
            value:0,
            name: 'Odi'
          },
          {
            value: 0,
            name: 'T20'
          },
          {
            value: 0,
            name :'Ipl'
          }
        ],
        radius: '50%'
      }
    ]
  };

  const [graphType, setGraphType] = useState('BAR')
  const [optionVal, setOptionVal] = useState(optionV);
  const [optionValPie, setOptionValPie] = useState(optionVvPie)
  const [graph_data, setGraph_data] = useState([0,0,0,0])

  const changeGraph = ()=>{
    if(graphType==='BAR'){
    setGraphType('PIE')
    // displayGraph() 
    }
    else setGraphType('BAR')
    // displayGraph()
  }






    const displayGraph = () => {
        console.log('finding ' +  find  );
    
        for (let j = 0; j < stats.length; j++) {
          if (stats[j][0] === find) {
            const newData = stats[j].slice(1);
            console.log('=> ' + find + '  ' + newData);
            setGraph_data(newData)
            const optionVv = {
              legend: {},
              tooltip: {},
              dataset: {
                dimensions: ['product', 'Test', 'Odi', 'T20', 'Ipl'],
                source: [
                  {
                    product: 'Format',
                    'Test': graph_data[0],
                    'Odi': graph_data[1],
                    'T20': graph_data[2],
                    'Ipl': graph_data[3],
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

           const optionVvPie = {
              series: [
                {
                  type: 'pie',
                  data: [
                    {
                      value: graph_data[0],
                      name: 'Test'
                    },
                    {
                      value: graph_data[1],
                      name: 'Odi'
                    },
                    {
                      value: graph_data[2],
                      name: 'T20'
                    },
                    {
                      value: graph_data[3],
                      name :'Ipl'
                    }
                  ],
                  radius: '50%'
                }
              ]
            };

            // if(graphType === 'bar'){
            setOptionVal(optionVv);
            // }
            // if(graphType === 'pie'){
              setOptionValPie(optionVvPie)
            // }
            break;
          }
        }  
      };

     
      

      

  return (
    <>
  { graphType === 'BAR'  &&
     <ReactEcharts option={optionVal} style={{ width: '550px', height: '550px' }}  />
    
     }

    { graphType === 'PIE' &&   
    
     <ReactEcharts option={optionValPie} style={{ width: '550px', height: '550px' }}  />
     
     }

     <div class='flex justify-center'> 

     <div class='w-1/2 flex justify-center ml-auto mr-auto '> 
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2" onClick={displayGraph}>Show Graph </button>
     </div>

     <div class='w-1/2 flex justify-center ml-auto mr-auto ' > 
      <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2' onClick={changeGraph}> {graphType} </button>
     </div>

     </div>

    </>
  )
}
