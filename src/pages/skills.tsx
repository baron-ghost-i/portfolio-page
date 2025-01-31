import Page from "./components";
import '../styles/skills.css'


type hasSubgroups = {[key:string]:string[][]}
type hasNoSubgroup = string[][]
type skillType = {[key:string]: hasSubgroups | hasNoSubgroup}

interface skillListProps {
	section: string,
	List: skillType
}

const skillsList: skillType = {
	'Core Subjects': [
		['Signal Processing', '70%'],
		['Digital Design/Computer Architecture', '70%'],
		['Embedded Systems', '60%'],
		['Communication System Design', '60%'],
		['Control Engineering', '60%'],
		['Analog Design', '55%'],
		['Semiconductor Physics', '55%'],
		['Microwave Engineering', '40%'],
	],
	'Core Tools/Skills': [
		['Python', '85%'],
		['MATLAB', '70%'],
		['C/C++', '65%'],
		['Verilog/SystemVerilog', '60%'],
		['Tcl', '50%'],
		['LaTeX', '70%'],
		['LTSpice', '50%'],
		['NI Multisim', '85%'],
	],
	'Additional Tools/Skills': [
		['Git', '60%'],
		['JavaScript/TypeScript', '75%'],
		['HTML5/CSS3', '65%'],
		['React.js', '65%'],
		['SQL', '70%'],
		['MongoDB', '60%'],
		['Java', '50%'],
	]
}

function Bar({width}:{width:string}) {
	return(
		<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<rect width={width}/>
		</svg>
	)
}

function ListItem({data}:{data:string[]}) {
	return (
		<li key={data[0]} className="skills">
			{data[0]}
			<Bar width={data[1]}/>
		</li>
	)
}

function ListMaker({section, List}: skillListProps) {
	let item: JSX.Element = <></>
	if(Array.isArray(List[section])) {
		item = (
			<ul className="skillList">
				{List[section].map(
					(v: string[]) => <ListItem data={v} key={v[0]}/>
				)}
			</ul>
		)
	}

	else {
		const subkeys = Object.keys(List[section]);
		item = (
			<ul className="subgroup">
				{subkeys.map(
					(subkey) => {
						return (
							<li key={subkey} className='skill-subgroup'>
								<h4>{subkey}</h4>
								{<ListMaker List={List[section] as hasSubgroups} section={subkey}/>}
							</li>
						)
					}
				)}
			</ul>
		)
	}

	return (
		<>{item}</>	
	)
}

function Section({section, List}: skillListProps) {
	return (
		<div id={section}>
			<h3>{section}</h3>
			<ListMaker section={section} List={List}/>
		</div>
	)
}

export default function Skills(){
	return (
		<Page id='skillsPage' animated="svg > rect, #skillsPage > #content" >
			<div id='content'>
				<Section section='Core Subjects' List={skillsList}/>
				<Section section="Core Tools/Skills" List={skillsList}/>
				<Section section='Additional Tools/Skills' List={skillsList}/>
			</div>
		</Page>
	)
}