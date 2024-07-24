import { Component } from "react";
import "../styles/education.css"
import Page, { menuHandlingProps } from "./components"

interface EFProps {
	name: string;
	description: string;
	start: string;
	end: string;
	content: string;
	moreDetails: boolean
}
type stateType = {more: boolean}

interface TableProps {
	name: string;
	heading: Array<string>;
	content: Array<Array<string>>
}

const entity: {[key: string]:Array<string>} = {
	'ju': ['Jadavpur University, Kolkata', 'Semester', 'SGPA', 'https://jadavpuruniversity.in'],
	'kps': ['Kalyani Public School, Barasat', 'Subject', 'Marks', 'https://www.kalyanipublicschool.org'],
	'misk': ['Mother International School, Konnagar', '', '', 'https://www.miskon.org/'],
	'jeea': ['JEE Advanced', '', '', 'https://www.jeeadv.ac.in'],
	'jeem': ['JEE Main', '', '', 'https://jeemain.nta.ac.in'],
	'wbjee': ['WBJEE', '', '', 'https://wbjeeb.nic.in'],
}

const content: {[key: string]:Array<Array<string>>} = {
	'ju':[
		['1st', '9.10'],
		['2nd', '8.24'],
		['3rd', '9.38']
	],
	'kps-2020': [
		['Physics', '95'],
		['Chemistry', '97'],
		['Mathematics', '95'],
		['Computer Science', '97'],
		['English', '96'],
		['Bengali','94']
	],
	'kps-2018': [
		['Science', '92'],
		['Mathematics Standard', '97'],
		['Information Technology', '98'],
		['Social Science', '95'],
		['English', '93'],
		['Bengali','96']
	]
}

class Table extends Component<TableProps> {
	render() {
		const { name, heading, content } = this.props;
		return (
			<table id={name} className="ed-table">
				<thead>
					<tr key='header'>
						{heading.map(value => {return (<th key={value}>{value}</th>)})}
					</tr>
				</thead>
				<tbody>
					{
						content.map(
							item => {
								return (
								<tr key={item[0]}>
									{item.map((value, index) =>
										{return(
											<td key={index}>{value}</td>
										)}
									)}
								</tr>
								)
							}
						)
					}
				</tbody>
			</table>
		)
	}
}

class Field extends Component<EFProps, stateType> {
	state = {
		more: false
	}
	toggleDetails = () => {this.setState(prevState => ({more: !prevState.more}))}

	moreDetails(){
		const { name, start } = this.props;
		if (name==='ju') {
			return <Table name='ju' heading={entity[name].slice(1,3)} content={content[name]}/>
		} else {
			return <Table name='kps' heading={entity[name].slice(1,3)} content={content[name+'-'+start]}/>
		}
	}

	render() {
		const {name, description, start, end, content, moreDetails } = this.props;
		return (
			<div className='listItem' id={name}>
				{/*Will make/add modifiable SVG later using <object>*/}
				<div className='image' id={name}>
					<a href={entity[name][3]} target="_blank" rel='noopener noreferrer'>
					</a>
				</div>
				<h3>{entity[name][0]}</h3>
				<p className='descriptor'>
					{description} <br/> {start===''?null:(start + ' - ' + end)}
				</p>
				<p className='content'>
					{content} <br/>
					{moreDetails?(
						<span onClick={this.toggleDetails} className={'show-more'+(this.state.more?' show':'')}>
							Details
						</span>
					):null}
				</p>
				{moreDetails?(
					<div className={"more-details"+(this.state.more?' show':'')}>
						{this.moreDetails()}
					</div>
				):null}
			</div>
		)
	}	
}

export default function Education({menuButton, menuChange}: menuHandlingProps){
	return (
		<Page id='educationPage' animated='#educationPage > h2, #timeline, .listItem *' menuButton={menuButton} menuChange={menuChange}>
			<h2>Schools</h2>
			<div id="timeline">
				<Field
					name='ju'
					description='B.E. Electronics and Tele-Communication Engineering'
					start='2022'
					end='2026'
					content='CGPA (upto 2nd Year 1st Semester): 84.54%'
					moreDetails={true}
				/>

				<Field
					name='kps'
					description='AISSCE 2022'
					start='2020'
					end='2022'
					content='Aggregate Score: 96.0%'
					moreDetails={true}
				/>

				<Field
					name='kps'
					description='AISSE 2020'
					start='2018'
					end='2020'
					content='Aggregate Score: 94.6%'
					moreDetails={true}
				/>
				<Field
					name='misk'
					description='Nursery - Std. VIII'
					start='2007'
					end='2018'
					content='Primary and middle school'
					moreDetails={false}
				/>
	 		</div>
			<h2>Examinations</h2>
			<div id='timeline'>
				<Field
					name='jeea'
					description='2022'
					start=''
					end=''
					content='GMR: 19553'
					moreDetails={false}
				/>
				<Field
					name='jeem'
					description='2022'
					start=''
					end=''
					content={("GMR: 16941\nPercentile: 98.1441546\nAlloted seat in B.Tech. "
						+"Electrical Engineering program at NIT Durgapur in first round of JoSAA")}
					moreDetails={false}
				/>
				<Field
					name='wbjee'
					description='2022'
					start=''
					end=''
					content={('GMR: 605\nPMR: 313\nSecured seat in B.E. Electronics and '
						+'Tele-Communication Engineering program at Jadavpur University')}
					moreDetails={false}
				/>
			</div>
		</Page>
	);
}