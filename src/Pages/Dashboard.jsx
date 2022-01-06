import React from 'react'
import 'chart.js/auto'
import BarChart from '../Components/BarChart'

const Dashboard = () => {

   

    return (

<div className='grid grid-cols-2 grid-rows-2 place-items-center pl-16 h-screen'>
      <BarChart className="w-96 h-96 shadow-lg p-5"/>
</div>

    )
}

export default Dashboard
