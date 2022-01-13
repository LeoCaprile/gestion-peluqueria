import React from 'react'
import 'chart.js/auto'
import BarChart from '../Components/BarChart'

const Dashboard = () => {
  return (

<div className='grid grid-cols-2 grid-rows-2 place-items-center h-screen pl-16 '>
      <BarChart className="shadow-lg p-5 rounded-lg w-full h-full"/>
</div>

  )
}

export default Dashboard
