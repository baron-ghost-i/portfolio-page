import { Component } from "react";
import "../styles/work.css"
import Page from "./components"

interface EFProps {
	name: string;
	description: string;
	start: string;
	end: string;
	content: string;
}

const entity: {[key: string]:Array<string>} = {
	'tcs': ['Intern', '', '', 'https://www.tcs.com/what-we-do/research']
}

class Field extends Component<EFProps> {
	render() {
		const {name, description, start, end, content } = this.props;
		return (
			<div className='listItem' id={name}>
				<div className='image' id={name}>
					<a href={entity[name][3]} target="_blank" rel='noopener noreferrer'></a>
				</div>
				<h3>{entity[name][0]}</h3>
				<p className='descriptor'>
					{description} <br/> {start===''?null:(start + ' - ' + end)}
				</p>
				<p className='content'>
					{content} <br/>
				</p>
			</div>
		)
	}	
}

export default function Work(){
	return (
		<Page id='workPage' animated='#workPage > h2, #timeline, .listItem *' >
			<div id='content'>
				<div id='timeline'>
					<Field
						name='tcs'
						description='CTO Lab, Research and Innovations Lab, Tata Consultancy Services'
						start='June 6, 2025'
						end='August 7, 2025'
						content={'Developed a Python library for optimizing multiplications and MAC operations on matrices storing 4-bit integers.\nAchieved over 100x speedup compared to NumPy, 20x speedup over PyTorch, and on par with PyTorch\'s linear transformation kernel for quantized tensors.\nReduced memory footprint by half using integer packing.'}
					/>
				</div>
			</div>
		</Page>
	);
}