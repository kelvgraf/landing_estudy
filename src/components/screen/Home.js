import React, { Component} from 'react';
import styled  from 'styled-components';

import Header from '../component/Header';


const Container = styled.div`
	display: flex;
	justify-content: center;
	
	width: 100%;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100%;
	height: 100vh;
	max-width: 1366px;
	padding: 0 1.5rem;
`;

const BoxTitle = styled.span`
	display: flex;
	justify-content: center;

	width: 80%;
	height: 100%;
	margin-top: 8.8125rem;

	border-bottom: 1px solid #00000021;
`;

const TitleHome = styled.h2`
	font-family: 'Roboto';;
	font-style: normal;
	font-weight: 900;
	font-size: 48px;
	line-height: 56px;

	color: #08173F;
`;

class Home extends Component {

	render() {
		return (
			<Container>
				<Content>
					<Header/>
					<BoxTitle>
						<TitleHome>Lorem Ipsum</TitleHome>
					</BoxTitle>
				</Content>
			</Container>
		)
	}
}

export default Home;
