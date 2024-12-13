import { useRef, useCallback } from 'react';
import { FiDownload } from 'react-icons/fi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BasicChart({
  title,
  barLabels,
  // label1,
  // label2,
  // label3,
  // label4,
  // label5,
  // data1,
  // data2,
  // data3,
  // data4,
  // data5,
  // borderColor1,
  // borderColor2,
  // borderColor3,
  // borderColor4,
  // borderColor5,
  // bgColor1,
  // bgColor2,
  // bgColor3,
  // bgColor4,
  // bgColor5,
  datasets
}:any) {



  const data = {
    labels: barLabels,
    datasets: datasets.map((dataset: any) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: dataset.backgroundColor,
      backgroundColor: dataset.backgroundColor,
    })),
  };

  const allData = datasets.flatMap((d: any) => d.data).filter((value: any) => 
    typeof value === 'number' && !isNaN(value) && isFinite(value)
  );
  
  const options:ChartOptions<'bar'>= {
    indexAxis: 'x' ,  
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: title,
      },
      // Cambia las opciones para TODAS las etiquetas de ESTE GRÁFICO
      datalabels: {
        color: function (context: any) {
          const index = context.dataIndex;
          const value = context.dataset.data[index];
          return value < 1
            ? 'white' // dibujar valores negativos en blanco
            : index % 2
            ? 'grey' // de lo contrario, alternar valores en gris
            : 'grey';
        },
      },
    },
    scales: {
      y: {
        type: 'linear', // Asegura que el eje X sea continuo
        beginAtZero: true, // Comienza en 0 si es necesario
        min: Math.min(...allData),
        max: Math.max(...allData) + 10,
      },
    },
}

console.log(datasets.flatMap((d: any) => d.data));
console.log('options', options);
console.log('data', data);
  const labels = barLabels;

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: label1,
  //       data: data1,
  //       borderColor: borderColor1,
  //       backgroundColor: bgColor1,
  //     },
  //     {
  //       label: label2,
  //       data: data2,
  //       borderColor: borderColor2,
  //       backgroundColor: bgColor2,
  //     },
  //     {
  //       label: label3,
  //       data: data3,
  //       borderColor: borderColor3,
  //       backgroundColor: bgColor3,
  //     },
  //     {
  //       label: label4,
  //       data: data4,
  //       borderColor: borderColor4,
  //       backgroundColor: bgColor4,
  //     },
  //     {
  //       label: label5,
  //       data: data5,
  //       borderColor: borderColor5,
  //       backgroundColor: bgColor5,
  //     },
  //   ],
  // };

 // console.log('data1', data1)

  // download chart button
  const refChartFiveData = useRef(null);

  const downloadImageBarChartFive = useCallback(() => {
    const link = document.createElement('a');
    link.download = `${title}.png`;
  //  link.href = refChartFiveData.current.toBase64Image();
    link.click();
  }, []);

  return (
    <div className='chart-container' style={{width:'1000px', margin:'10px'}}>
      <Bar options={options} data={data} ref={refChartFiveData} key={JSON.stringify(data)} />
      <button
        type='button'
        onClick={downloadImageBarChartFive}
        className='download-btn'
      >
        <FiDownload />
      </button>
    </div>
  );
}

export default BasicChart;
