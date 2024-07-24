import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from "./pages/layout"
import Home from "./pages/home"
import AboutMe from "./pages/about";
import Education from './pages/education';
import Skills from './pages/skills';
import Projects from "./pages/projects"
import Contact from './pages/contact';

import { menuChangingContext } from './pages/contextExport';

function isDark(dark: boolean) {
	if(dark) return ' night'
	else return ''
}

export default function App() {
	const [dark, setTheme] = useState(
		():boolean=>{
			const _dark = localStorage.getItem('dark');
			if(_dark===null) return true;
			else return (_dark==='true')?true:false;
		}
	);
	const menuState = useState('≡');

	useEffect(
		()=>localStorage.setItem('dark', dark.toString()),
		[dark]
	)

	const navbarprops = {dark: dark, setTheme: setTheme, menuButton: menuState[0], menuChange: menuState[1]}
	return (
		<div className={"App" + isDark(dark)}>
			<menuChangingContext.Provider value={menuState}>
					<Router>
						<Routes>
							<Route path="/" element={ <NavBar {...navbarprops}/> }>
								<Route index element={<Home/>} />
								<Route path="/about" element={<AboutMe/>} />
								<Route path="/education" element={<Education/>} />
								<Route path="/skills" element={<Skills/>}/>
								<Route path="/projects" element={<Projects/>} />
								<Route path="/contact" element={<Contact/>} />
							</Route>
						</Routes>
					</Router>
			</menuChangingContext.Provider>
		</div>
	);
}