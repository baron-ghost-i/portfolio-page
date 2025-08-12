import Page from './components'
import '../styles/about.css'
import { Link } from 'react-router-dom'

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

export default function AboutMe(){
	return (
		<Page id='aboutPage' animated="#summary, #details, img[alt='Subhranil Ghoshal']" >
			<div id='content'>
				<div id='summary'>
				<h3 id='summary-title'>Summary</h3>
					<span id='summary-content'>
						<img alt='Subhranil Ghoshal' src='/image-self.jpeg'/>

						Hi! I'm Subhranil Ghoshal, an undergrad student of electronics and tele-communication 
						engineering in his fourth year of study at Jadavpur University, Kolkata.<br/><br/>

						I’m passionate about signal processing, with a strong interest in designing digital circuits.
						Consequently, I am well-acquainted with several tools utilized in these fields, including but not
						limited to MATLAB, Python, Verilog, TSpice, and - one must not forget - LaTeX. <br/><br/>

						Besides electronics and communications, I’m also familiar with the core concepts of DSA and OOP, 
						alongside a variety of programming languages, including C/C++, JavaScript, Java, Tcl, etc., which I
						have utilized in a variety of projects since middle school. You can find out more about them <Link to='/skills'>here</Link>.
						<br/><br/>
		
						Outside my professional life, I’m an avid reader of Bengali
						and English literature, and an amateur photographer of the nature. I also dabble with origami from time to time,
						and used to enjoy writing on <Link to='https://www.quora.com/profile/Subhranil-Ghoshal-1'>Quora</Link>.<br/><br/>
					</span>
				</div>

				<div id='details'>
					<h3 id='details-title'>Basic Details</h3>
					<table id='details-table'>
						<tbody>
							<TR head='Full Name' details='Subhranil Ghoshal'/>
							<TR head='Address' details='Konnagar, Hooghly, West Bengal, India'/>
							<TR head='Email' details='ghoshalsubhranil@gmail.com'/>
						</tbody>
					</table>
				</div>
			</div>
		</Page>
	)
}