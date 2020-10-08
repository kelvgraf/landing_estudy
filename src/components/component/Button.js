import React from 'react';
import styled  from 'styled-components';

const BtnSing = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 101px;
	height: 42px;
	margin: 0 .95rem;

	border: none;
	border-radius: 4px;
	
	background: ${props => props.background};
	box-shadow: ${props => props.boxShadow};

	color: ${props => props.color};
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: .75rem;
	line-height: .875rem;

	cursor: pointer;
`;

function Button(props) {
	return(
		<>
			<BtnSing
				background={props.background}
				color= {props.color}
				boxShadow= {props.boxShadow}
			>
				{props.children}
			</BtnSing>
		</>
	)
}

export default Button;
