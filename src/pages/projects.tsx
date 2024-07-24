import Page from "./components";
import '../styles/projects.css'

interface CardProps {
	id?: string;
	imageLink: string;
	alt: string;
	title: string;
	content: string | JSX.Element;
	link: string;
	tools: string[];
	order: number
}

function Card({id='', imageLink, alt, title, content, link, tools, order}: CardProps) {
	
	let _link: JSX.Element;
	const _style= {'--animation-order': `${order}`} as React.CSSProperties;
	if(link==='') {_link = <></>;}
	else{ _link= <a href={link} target='_blank' rel='noopener noreferrer'>Check it out</a>}

	
	return (
		<div id={id} className="card" style={_style}>
			<div className='inner'>
			
				<div className="back">
					<h3 className="card-title">
						{title}
					</h3>
					<span className="card-content">
						{content}
					</span>
					{tools.length===0?<></>:<ul>Tools used:<br/>{tools.map((value, index)=><li key={index} className="tool">{value}</li>)}</ul>}
					{_link}
				</div>

				<div className='front'>
					<img src={imageLink} alt={alt} id={id}/>
				</div>
			
			</div>
		</div>
	)
}

export default function Projects(){
	return (
		<Page id='projectsPage' animated="#content > .card, .card img" >
			<div id='content'>
				
			<Card
				id="HoQBot"
				imageLink="/projects/hoq.svg"
				alt="HoQ Icon"
				title="HoQ Bot"
				content={
					<>A Discord bot made with Python; it is currently offline due to hosting issues.<br/>
					The bot includes functionalities like autoresponses, making Google searches, playing
					music, etc.</>
				}
				link='https://github.com/baron-ghost-i/HoQ-Bot/'
				tools={['Python', 'MongoDB']}
				order={1}
			/>
			
			<Card
				id="PortfolioPage"
				imageLink="/projects/react.svg"
				alt="React Icon"
				title="This"
				content="This portfolio site has been made using React.js, with SVGs made with Figma."
				link='https://github.com/baron-ghost-i/portfolio-page/'
				tools={['React.js', 'TypeScript', 'Figma', 'Vercel']}
				order={2}
			/>
			
			<Card
				id="PrototypeProcessor"
				imageLink="/projects/cpu.svg"
				alt="Schematic diagram of 8-bit prototype processor"
				title="8-bit Prototype Processor"
				content="A prototype processor which can perform addition, subtraction and comparison
				on 8-bit numbers."
				link=''
				tools={['NI Multisim']}
				order={3}
			/>
			
			<Card
				id="Modulator"
				imageLink="/projects/am.png"
				alt="Amplitude Modulator Circuit"
				title="Transistor-based Amplitude Modulator"
				content={<>An amplitude modulator designed to modulate the amplitude of a carrier signal of frequency
				100 kHz using a baseband signal of frequency 1 kHz.<br/>
				The circuit was simulated using NI Multisim and constructed on a breadboard.</>}
				link=''
				tools={['NI Multisim', 'Breadboard', '2N2222 NPN BJT', 'Resistors', 'Capacitors']}
				order={4}
			/>

			</div>
		</Page>
	)
}