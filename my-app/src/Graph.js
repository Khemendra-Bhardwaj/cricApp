import React,{useState} from 'react'
import ReactEcharts from 'echarts-for-react';
export default function Graph({find,stats,setStats  }) {

  const [graphType, setGraphType] = useState('bar')

  const changeGraph = ()=>{
    if(graphType==='bar'){
    setGraphType('pie')
    }
    else setGraphType('bar')
    // displayGraph()
  }

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
            value: 0,
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


  const [optionVal, setOptionVal] = useState(optionV);
  const [optionValPie, setOptionValPie] = useState(optionVvPie)
  
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

           const optionVvPie = {
              series: [
                {
                  type: 'pie',
                  data: [
                    {
                      value: `${newData[0]}`,
                      name: 'Test'
                    },
                    {
                      value: `${newData[1]}`,
                      name: 'Odi'
                    },
                    {
                      value: `${newData[2]}`,
                      name: 'T20'
                    },
                    {
                      value: `${newData[3]}`,
                      name :'Ipl'
                    }
                  ],
                  radius: '50%'
                }
              ]
            };

            if(graphType === 'bar'){
            setOptionVal(optionVv);
            }
            if(graphType === 'pie'){
              setOptionValPie(optionValPie)
            }
            break;
          }
        }  
      };

  return (
    <>

    { graphType === 'bar'  &&
     <ReactEcharts option={optionVal} style={{ width: '550px', height: '550px' }}  />
    
     }

    { graphType === 'pie' &&   
     <ReactEcharts option={optionVal} style={{ width: '450px', height: '450px' }}  />

     }

     <div class='flex justify-center'> 

     <div class='w-1/2 flex justify-center ml-auto mr-auto '> 
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2" onClick={displayGraph}>Show Graph </button>
     </div>

     {/* <div class='w-1/2 flex justify-center ml-auto mr-auto ' > 
      <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2' onClick={changeGraph}> Toggle Graph </button>
     </div> */}

     </div>

    </>
  )
}
