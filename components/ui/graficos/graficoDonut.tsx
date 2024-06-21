"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const graficoDonut = ({ contas }: DoughnutChartPropriedades) => {
  const data = {
    datasets: [
      {
        label: 'Bancos',
        data: [1326, 2500, 5750],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Banco 1', 'Banco 2', 'Banco 3']
  }
  return <Doughnut
    data={data}
    options={{
      cutout: '60%',
      plugins: {
        legend: {
          display: false
        }
      }
    }}
  />
}

export default graficoDonut
