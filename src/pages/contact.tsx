import "../styles/contact.css"
import emailjs from '@emailjs/browser'
import React, { useRef } from "react"
import Page, { menuHandlingProps } from "./components";

const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);

	const sendMail = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if(form.current){
			emailjs.sendForm(
				'portfolio_site',
				'portfolio-mailer',
				form.current,
				{publicKey:'AJZLzVvSO2owHaWcV'}
			).then(
				() => {
				alert('Message sent successfully');
			}, (error: Error) => {
					alert('Message couldn\'t be sent, please try again.');
					console.log(error.message)
				}
			)
		}
	}

	return (
		<form id='Form' ref={form} onSubmit={sendMail}>
			<div className="formItem" id='head'>
				<h3>Drop me a message</h3>
			</div>
	
			<div className="formItem" id='note'>
				<span>Fields marked with (<span id='star'>*</span>) are required</span>
			</div>
	
			<div className="formItem" id='name'>
				<input type='text'
					id="username" name='username'
					autoComplete="on"
					placeholder=" "
					title="Your full name"
					required
				/>
				<label id='label-username' htmlFor='username'>Name</label>
			</div>

			<div className="formItem" id='email'>
				<input
					type="email"
					id="emailID"
					name='email'
					autoComplete="on"
					placeholder=" "
					title="Your email address"
					required/>
				<label id='label-email' htmlFor='emailID'>Email</label>
			</div>

			<div className="formItem" id='messageBox'>
				<textarea
					id="message"
					name='message'
					spellCheck='false'
					placeholder=" "
					title="Your message"
					required
				/>
				<label id='label-msgbox' htmlFor='message'>Message</label>
			</div>

			<div className="formItem" id='submitButton'>
				<input id='submit' type="submit" value="Send"/>
			</div>
		</form>
	  )
}

function SocialLinks() {
	const handles: Array<Array<string>>= [
		['github', 'fa-brands fa-github','https://www.github.com/baron-ghost-i'],
		['facebook', 'fa-brands fa-facebook', 'https://www.facebook.com/baron.ghost.i/'],
		['instagram', 'fa-brands fa-instagram', 'https://www.instagram.com/sierra_two_zero'],
		['linkedin', 'fa-brands fa-linkedin', 'https://www.linkedin.com/in/subhranil-ghoshal-155b14259'],
		['discord', 'fa-brands fa-discord', 'https://www.discord.com/users/@586088176037265408'],
		['x', 'fa-brands fa-x-twitter', 'https://x.com/baron_ghost_i']
	]
	return(
		<div id='sociallinks'>
			<h3>Connect with me</h3>
			<span id='description'>
				Send me a mail at {" "}
				<a href='mailto:ghoshalsubhranil@gmail.com' target='_blank' rel='noopener noreferrer'>
					ghoshalsubhranil@gmail.com,
				</a> or connect with me
			</span>
			{handles.map((value, i) => {
				return(
					<a key={handles[i][0]}
					href={handles[i][2]}
					target='_blank'
					rel='noopener noreferrer'>
						<i className={handles[i][1]}></i>
					</a>
				)
			})}
		</div>
	)
}

export default function Contact ({menuButton, menuChange}: menuHandlingProps) {
	return (
		<Page id='contactPage' animated="#contactform, #socials" menuButton={menuButton} menuChange={menuChange}>
			<div id="content">
				<div id='contactform'>
					<ContactForm/>
				</div>

				<div id='socials'>
					<SocialLinks/>
				</div>
			</div>
		</Page>
	)
}