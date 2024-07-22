import Page, { menuHandlingProps } from "./components";
import '../styles/projects.css'

interface CardProps {
	id?: string;
	imageLink: string;
	alt: string;
	title: string;
	content: string | JSX.Element;
	link: string;
	tools: string[]
}

function Card({id='', imageLink, alt, title, content, link, tools}: CardProps) {
	
	let _link: JSX.Element;
	if(link==='') _link = <></>;
	else _link= <a href={link} target='_blank' rel='noopener noreferrer'>Check it out</a>
	
	return (
		<div id={id} className="card">
			<div className='inner'>
			
				<div className="back">
					<h3 className="card-title">
						{title}
					</h3>
					<span className="card-content">
						{content}
					</span>
					{tools.length===0?<></>:<ul>Tools:<br/>{tools.map((value, index)=><li key={index} className="tool">{value}</li>)}</ul>}
					{_link}
				</div>

				<div className='front'>
					<img src={imageLink} alt={alt}/>
				</div>
			
			</div>
		</div>
	)
}

export default function Projects({menuButton, menuChange}: menuHandlingProps){
	return (
		<Page id='projectsPage' animated="" menuButton={menuButton} menuChange={menuChange}>
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
			/>
			
			<Card
				id="PortfolioPage"
				imageLink="/projects/react.svg"
				alt="React Icon"
				title="This"
				content="This portfolio site has been made using React.js, with SVGs made with Figma."
				link='https://subhranil-ghoshal-portfolio.vercel.app'
				tools={['React.js', 'TypeScript', 'Figma', 'Vercel']}
			/>
			
			<Card
				id="PrototypeProcessor"
				imageLink="/projects/cpu.svg"
				alt=""
				title="8-bit Prototype Processor"
				content="A prototype processor which can perform addition, subtraction and comparison
				on 8-bit numbers."
				link=''
				tools={['NI Multisim']}
			/>
			
			<Card
				id="Modulator"
				imageLink="/projects/am.png"
				alt=""
				title="Transistor-based Amplitude Modulator"
				content={<>An amplitude modulator designed to modulate the amplitude of a carrier signal of frequency
				100 kHz using a baseband signal of frequency 1 kHz.<br/>
				The circuit was simulated using NI Multisim and constructed on a breadboard.</>}
				link=''
				tools={['NI Multisim', 'Breadboard', '2N2222 NPN BJT', 'Resistors', 'Capacitors']}
			/>

			</div>
		</Page>
	)
}