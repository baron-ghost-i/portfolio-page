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
			['Analog Circuits', '60%'],
			['Digital Circuits', '60%'],
			['Network Analysis and Synthesis', '60%'],
			['Analog Communication Systems', '75%'],
			['Digital Communication Systems', '10%'],
			['Microwave Engineering', '50%'],
			['Semiconductor Physics', '40%'],
			['Control Theory', '20%']
		],
	'Core - Software Tools': {
		'Languages': [
			['MATLAB/GNU Octave', '60%'],
			['Python', '90%'],
			['C', '75%'],
			['Verilog', '50%'],
			['LaTeX', '80%']
		],
		'Simulators': [
			['NI Multisim', '85%'],
			['Proteus', '75%'],
			['LTSpice', '25%']
		]
	},
	'Software': {
		'Web Development': [
			['JavaScript/TypeScript', '75%'],
			['HTML5', '65%'],
			['CSS', '60%'],
			['React.js', '65%']
		],
		'Others': [
			['SQL', '70%'],
			['MongoDB', '60%'],
			['Git', '60%'],
			['Java', '50%'],
		]
	}
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
				<Section section="Core - Software Tools" List={skillsList}/>
				<Section section='Software' List={skillsList}/>
			</div>
		</Page>
	)
}