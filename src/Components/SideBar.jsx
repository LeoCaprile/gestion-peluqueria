import React from 'react';
import SideBarIcon from './SideBarIcon';
import {IoMdPersonAdd} from 'react-icons/io'
import { FaCalendarAlt,FaChartBar, FaQuestionCircle, FaHome} from "react-icons/fa";
import { Link } from 'react-router-dom';

const SideBar = () => {
	return <div className="fixed p-2 gap-4 top-0 left-0 h-screen w-15 m-0 flex flex-col bg-gray-900 text-white shadow-lg justify-center">
	
	<Link to='/dashboard'><SideBarIcon text='Tablero Principal' icon={<FaHome/>}/></Link>
	<Link to='/addclient'><SideBarIcon text='Añadir Cliente' icon={<IoMdPersonAdd/>}/></Link>
	<Link to='/calendar'><SideBarIcon text='Calendario' icon= {<FaCalendarAlt/>}/></Link>
	<Link to='/charts'><SideBarIcon text='Graficos' icon={<FaChartBar/>}/></Link>
	<Link to='/help'><SideBarIcon text='Ayuda' icon={<FaQuestionCircle/>}/></Link>

	</div>;
};



export default SideBar;
