import React from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' ,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' ,
    },
    title: {
      display: true,
      text: 'Kuryerning olgan baholari',
    },
  },
};

const labels = ["5 yulduz","4 yulduz","3 yulduz","2 yulduz","1 yulduz"];

export const data = {
  labels,
  datasets: [
    {
      label: "O'rtacha 4.6 ",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: '#5f63f2',
    },
  ],
};

export function DeleveryStatistics() {
  return <Bar options={options} data={data} />;
}
