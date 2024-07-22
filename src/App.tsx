import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from "./pages/layout"
import Home from "./pages/home"
import AboutMe from "./pages/about";
import Education from './pages/education';
import Skills from './pages/skills';
import Projects from "./pages/projects"
import Contact from './pages/contact';

function App() {
	const [dark, setTheme] = useState(0);
	const [menuButton, menuChange] = useState('≡');

	return (
		<div className={"App" + (!dark? " night" : "")}>
			<Router>
				<Routes>
					<Route path="/" element={
						<NavBar
							theme={dark}
							nightfunc={setTheme}
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