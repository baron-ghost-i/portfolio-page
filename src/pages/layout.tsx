import { Link, Outlet } from "react-router-dom";
import "../styles/layout.css";
import { useState } from "react";
import React from 'react'

interface Props {
	to: string;
	children: React.ReactNode;
	className: string;
	onclick: React.MouseEventHandler<HTMLAnchorElement>
}

interface NavBarProps{
	dark: boolean,
	setTheme:Function,
	menuButton:string,
	menuChange: any
}

function Linker(props: Props) {
	return (
		<Link to={props.to} className={props.className} onClick={props.onclick}>
			{props.children}
		</Link>
		)
}

export default function NavBar({ dark, setTheme, menuButton, menuChange }:NavBarProps) {
	const [button, ChangeButton] = useState(
		()=>{
			const _dark = sessionStorage.getItem('dark');
			if(_dark===null) {
				if(dark) return 'dark_mode'
				else return 'light_mode'
			} else {
				if(_dark==='true') return 'dark_mode'
				else return 'light_mode'
			}
		}
	);
	//the purpose of T is to prevent animation of Night Mode when the page loads for the first time
	const [T, changeT] = useState('');

	function openClose(button:String){
		if(button==="≡") menuChange("×")
		else menuChange("≡")
	}
	
	function themeChange(){
		setTheme(!dark);
		sessionStorage.setItem('dark', (!dark).toString());
		if(dark){
			changeT(' dark')
			setTimeout(()=>ChangeButton('light_mode'), 200)
		}
		else{
			changeT(' light')
			setTimeout(()=>ChangeButton('dark_mode'), 200)
		}
		openClose(menuButton)
	}

	const props = {
		className: 'navItem',
		onclick: ()=>openClose(menuButton)
	}
	
	return (
		<>
			<div id='menuButtonCarrier'>
				<button className="navItem" id='menuButton' onClick={()=>openClose(menuButton)}>
					{menuButton}
				</button>
			</div>
			<div className={"navBar"+(menuButton==="≡"? " closed": "")}>
				<Linker to="/" {...props}>Home</Linker>
				<Linker to="/about"{...props}>About Me</Linker>
				<Linker to="/education" {...props}>Education</Linker>
				<Linker to="/skills" {...props}>Skills</Linker>
				<Linker to="/projects" {...props}>Projects</Linker>
				<Linker to="/contact" {...props}>Contact</Linker>
				<button id="Toggle" className="navItem" onClick={themeChange}>
					<span className={"material-symbols-outlined"+(T)} title={dark?"Dark Mode":"Light Mode"}>
						{button}
					</span>
				</button>
			</div>
			<Outlet/ >
		</>
	)
}