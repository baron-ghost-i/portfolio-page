import { Link, Outlet } from "react-router-dom";
import "../styles/layout.css";
import { useState } from "react";
import React from 'react'

interface Props {
	to: string;
	children: React.ReactNode
	className: string
}

interface NavBarProps{
	theme:number,
	nightfunc:Function,
	menuButton:string,
	menuChange: any
}


export default function NavBar({ theme, nightfunc, menuButton, menuChange }:NavBarProps) {
	const [button, ChangeButton] = useState('light_mode');
	//the purpose of T is to prevent animation of Night Mode when the page loads for the first time
	const [T, changeT] = useState('');

	function openClose(button:String){
		if(button==="≡") menuChange("×")
		else menuChange("≡")
	}
	
	function themeChange(){
		nightfunc(!theme);
		if(theme){
			changeT(' dark')
			setTimeout(()=>ChangeButton('light_mode'), 200)
		}
		else{
			changeT(' light')
			setTimeout(()=>ChangeButton('dark_mode'), 200)
		}
		openClose(menuButton)
	}

	function Linker(props: Props) {
		return (
			<Link to={props.to} className={props.className} onClick={()=>openClose(menuButton)}>
				{props.children}
			</Link>
			)
	}
	
	return (
		<>
			<div id='menuButtonCarrier'>
				<button className="navItem" id='menuButton' onClick={()=>openClose(menuButton)}>
					{menuButton}
				</button>
			</div>
			<div className={"navBar"+(menuButton==="≡"? " closed": "")}>
				<Linker to="/" className="navItem">Home</Linker>
				<Linker to="/about" className="navItem">About Me</Linker>
				<Linker to="/education" className="navItem">Education</Linker>
				<Linker to="/skills" className="navItem">Skills</Linker>
				<Linker to="/projects" className="navItem">Projects</Linker>
				<Linker to="/contact" className="navItem">Contact</Linker>
				<button id="Toggle" className="navItem" onClick={themeChange}>
					<span className={"material-symbols-outlined"+(T)} title={theme?"Dark Mode":"Light Mode"}>
						{button}
					</span>
				</button>
			</div>
			<Outlet/ >
		</>
	)
}