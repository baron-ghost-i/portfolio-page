import React, { ReactNode, useRef } from "react";

interface PageProps {
	id: string;
	className?: string;
	animated?: string;
	children?: ReactNode;
}

export interface menuHandlingProps {
	menuButton: string;
	menuChange: any
}

const headers:{[key:string]:string} = {
	'homePage':'',
	'aboutPage':'About Me',
	'educationPage': 'Education',
	'skillsPage':'Skills',
	'projectsPage':'Projects',
	'contactPage': 'Contact Me'
}

export const PageHeader = ({title}:{title: string}) => <div className="header"><h1>{title}</h1></div>

export function skipAnimation(q:string='', r:React.RefObject<HTMLDivElement>){
	if (q==='') q='.header';
	else q = '.header, '+q;

	Array.prototype.slice.call(r.current?.querySelectorAll(q)).forEach((item:HTMLElement) => {
		let anim = getComputedStyle(item, null).getPropertyValue('animation');
		if(anim!=='none') {item.style.animation='none'}
	})
}


function Page({ id, className='', animated='', children, menuButton, menuChange }: (PageProps & menuHandlingProps)) {
	const r = useRef<HTMLDivElement>(null);
	
	function handleClick() {
		skipAnimation(animated, r);
		if(menuButton==='×') menuChange('≡');
	}
	
	return (
		<div ref={r} id={id} className={className+' page'} onClick={handleClick}>
			{headers[id]===''?<></>:<PageHeader title={headers[id]}/>}
			{children}
		</div>
	)
}

export default Page;