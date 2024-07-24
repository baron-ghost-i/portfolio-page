import Page, { menuHandlingProps } from './components'
import '../styles/about.css'

function Details({details}:{details:string}) {
	if (details==='Konnagar, Hooghly, West Bengal, India') {
		return (
		<a href='https://www.google.com/maps/search/?api=1&query=Konnagar' target='_blank' rel='noopener noreferrer'>
			{details}
		</a>
		)
	} else if (details==='ghoshalsubhranil@gmail.com') {
		return (
		<a href='mailto:ghoshalsubhranil@gmail.com' target='_blank' rel='noopener noreferrer'>
			{details}
		</a>
		)
	} else {
		return <>{details}</>
	}
}

function TR({head, details}: {head:string, details:string}){
	return (
		<tr>
			<th>{head}</th>
			<td className='colon'>:</td>
			<td>{Details({details})}</td>
		</tr>
	)
}

export default function AboutMe({menuButton, menuChange}: menuHandlingProps){
	return (
		<Page id='aboutPage' animated="#summary, #details, img[alt='Subhranil Ghoshal']" menuButton={menuButton} menuChange={menuChange}>
			<div id='content'>
				<div id='summary'>
				<h3 id='summary-title'>Summary</h3>
					<span id='summary-content'>
						<img alt='Subhranil Ghoshal' src='/image-self.jpeg'/>
						Hi! I'm Subhranil Ghoshal, an undergraduate student of electronics and tele-communication 
						engineering in his third year of study, at Jadavpur University, Kolkata.<br/><br/>
						I’m passionate about communications engineering, with a strong interest in the designing of 
						both analog and digital circuits. Consequently, I am well-acquainted with most tools utilized 
						in these fields, ranging from languages like MATLAB and Python to circuit simulators like NI 
						Multisim and Proteus.<br/><br/>

						Besides electronics and communications, I’m also familiar with the core concepts of DSA and OOP, 
						alongside a variety of programming languages, including C, JavaScript, Java, etc., which I
						have utilized in a variety of projects since eighth grade.<br/><br/>
		
						Outside my professional life, I’m an avid reader of Bengali
						and English literature, and an amateur photographer of the nature.<br/><br/>
					</span>
				</div>

				<div id='details'>
					<h3 id='details-title'>Details</h3>
					<table id='details-table'>
						<tbody>
							<TR head='Name' details='Subhranil Ghoshal'/>
							<TR head='Age' details='20'/>
							<TR head='Address' details='Konnagar, Hooghly, West Bengal, India'/>
							<TR head='Email' details='ghoshalsubhranil@gmail.com'/>
						</tbody>
					</table>
				</div>
			</div>
		</Page>
	)
}