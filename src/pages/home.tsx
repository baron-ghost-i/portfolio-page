import "../styles/home.css";
import { Link } from "react-router-dom";
import Page from "./components";

const links: {[key:string]:Array<string>} = {
	'github': ["https://www.github.com/baron-ghost-i", 'github'],
	'linkedin': ['https://www.linkedin.com/in/subhranil-ghoshal-155b14259/', 'linkedin'],
	'quora': ['https://www.quora.com/profile/Subhranil-Ghoshal-1', 'quora'],
	'instagram': ["https://www.instagram.com/sierra_two_zero/", 'instagram']
}

function Linker({name}:{name:string}){
	return (
		<a id={name}
		href={links[name][0]}
		target="_blank" 
		rel="noopener noreferrer">
			<i className={"fa-brands fa-"+links[name][1]}></i>
		</a>
	)
}

const Home = () => {
	return (
	<Page id='homePage' className='centered' animated='#l1, #l2, a, #links' >
		<div id="content">
			<div id='text'>
					<p id="l1">Hello, I'm Subhranil Ghoshal</p>
					<p id="l2">Welcome to my portfolio page</p>
			</div>

			<div id='buttons'>					
				<Link to="/contact" id='contact-me'>
						Contact Me
				</Link>

				<Link id="downloadCV"
				to="https://drive.google.com/file/d/1ylHzrtT8ZGGGg3BWaCPYlO6q5JWm27no/view"
				target="_blank" 
				rel="noopener noreferrer"
				download>
					Download CV
				</Link>
			</div>
				
			<div id='links'>
				<Linker name="github"/>
				<Linker name="linkedin"/>
				<Linker name="quora"/>
				<Linker name='instagram'/>					
			</div>
		</div>
	</Page>
	);
};

export default Home;