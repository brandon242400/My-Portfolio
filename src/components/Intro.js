import React from 'react';
import styled from 'styled-components';

export default function Intro() {
	return (
		<Wrapper>
			<h1 className='name' id='intro-section'>
				Welcome to my Portfolio
			</h1>
			<p className='introduction'>
				Thank you for taking the time to look through my portfolio. My name is Brandon Carmona and I enjoy coding. 
				<br /> <br />
				I consider myself a very passionate developer. I find myself easily sucked into whatever I'm working on and enjoy myself while I do it. 
				<br /> <br />
				I'm always eager to learn more when it comes to programming. I hope to work with people who can help me further myself as a developer. 
			</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	text-align: center;

	.name {
		font-family: "Merriweather", serif;
		margin: 10vh auto 10vh auto;
		padding: 2%;
		width: fit-content;
		border: 10px solid black;
		border-radius: 30%;
	}

	.introduction {
		font-family: "Merriweather", serif;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
		font-size: 150%;
	}
`;