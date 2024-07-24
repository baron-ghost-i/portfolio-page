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

function isDark(dark: boolean) {
	if(dark) return ' night'
	else return ''
}

function App() {
	const [dark, setTheme] = useState(
		():boolean=>{
			const _dark = localStorage.getItem('dark');
			if(_dark===null) return true;
			else return (_dark==='true')?true:false;
		}
	);
	const [menuButton, menuChange] = useState('≡');

	useEffect(
		()=>localStorage.setItem('dark', dark.toString()),
		[dark]
	)

	return (
		<div className={"App" + isDark(dark)}>
			<Router>
				<Routes>
					<Route path="/" element={
						<NavBar
							dark={dark}
							setTheme={setTheme}
							menuButton={menuButton}
							menuChange={menuChange}/>
						}>
						<Route index element={<Home menuButton={menuButton} menuChange={menuChange}/>} />
						<Route path="/about" element={<AboutMe menuButton={menuButton} menuChange={menuChange}/>} />
						<Route path="/education" element={<Education menuButton={menuButton} menuChange={menuChange}/>} />
						<Route path="/skills" element={<Skills menuButton={menuButton} menuChange={menuChange}/>}/>
						<Route path="/projects" element={<Projects menuButton={menuButton} menuChange={menuChange}/>} />
						<Route path="/contact" element={<Contact menuButton={menuButton} menuChange={menuChange}/>} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;