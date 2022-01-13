/* eslint-disable no-tabs */
import SideBarIcon from './SideBarIcon'
import { IoMdPersonAdd } from 'react-icons/io'
import { FaCalendarAlt, FaChartBar, FaQuestionCircle, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return <div className="fixed p-2 gap-4 top-0 left-0 h-screen w-14 md:w-28 m-0 flex flex-col bg-gray-900 text-white shadow-lg justify-center">

	<Link to='/dashboard'><SideBarIcon text='Tablero Principal' icon={<FaHome className='md:w-12 md:h-12 w-7 h-7'/>}/></Link>
	<Link to='/addclient'><SideBarIcon text='Añadir Cliente' icon={<IoMdPersonAdd className='md:w-12 md:h-12 w-7 h-7'/>}/></Link>
	<Link to='/calendar'><SideBarIcon text='Calendario' icon= {<FaCalendarAlt className='md:w-12 md:h-12 w-7 h-7'/>}/></Link>
	<Link to='/charts'><SideBarIcon text='Graficos' icon={<FaChartBar className='md:w-12 md:h-12 w-7 h-7'/>}/></Link>
	<Link to='/help'><SideBarIcon text='Ayuda' icon={<FaQuestionCircle className='md:w-12 md:h-12 w-7 h-7'/>}/></Link>

	</div>
}

export default SideBar
