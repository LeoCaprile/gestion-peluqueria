import React from 'react'
import { Bar, Line } from 'react-chartjs-2'

const BarChart = (props) => {

    const handleActualWeek = () =>{
        
        const actualYear = new Date().getFullYear();
        const actualDay = new Date().getDate();
        const actualMonth = new Date().getMonth();
        const daysInMonth = new Date(actualYear,actualMonth,0).getDate();
        const daysOfweek = daysInMonth/4

            if(actualDay < daysOfweek) return 1;
            if(actualDay > daysOfweek && actualDay < daysOfweek*2) return 2;
            if(actualDay > daysOfweek*2 && actualDay < daysOfweek*3) return 3;
            if(actualDay > daysOfweek*3) return 4;   

    }



    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `Ventas Semana ${handleActualWeek()}`,
          },
        },
      };

    return (
        <div {...props}>
    <Bar
    datasetIdKey='id'
    options={options}
    data={{
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes', 'Sabado'],
        datasets: [
        {
            id: 1,
            label: 'Simparica',
            data: [3, 5, 2, 5],
            backgroundColor: 'orange'
        },
        {
            id: 2,
            label: 'Perros',
            data: [3, 2, 1, 3,4,5],
            backgroundColor: 'blue'
        },
        ],
    }}
    width={10}
    height={10}
    />
            
</div>
    )
}

export default BarChart
