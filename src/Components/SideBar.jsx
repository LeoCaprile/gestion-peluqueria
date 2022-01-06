import React from 'react';
import SideBarIcon from './SideBarIcon';
import {IoMdPersonAdd} from 'react-icons/io'
import { FaCalendarAlt,FaChartBar, FaQuestionCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';

const SideBar = () => {
	return <div className="fixed p-2 gap-4 top-0 left-0 h-screen w-15 m-0 flex flex-col bg-gray-900 text-white shadow-lg justify-center">
	
	<Link to='/addclient'><SideBarIcon icon={<IoMdPersonAdd/>}/></Link>
	<Link to='/calendar'><SideBarIcon icon= {<FaCalendarAlt/>}/></Link>
	<Link to='/charts'><SideBarIcon icon={<FaChartBar/>}/></Link>
	<Link to='/help'><SideBarIcon icon={<FaQuestionCircle/>}/></Link>

		</div>;
};



export default SideBar;
