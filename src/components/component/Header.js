import React, { Component} from 'react';
import styled  from 'styled-components';

import Button from './Button';

const Container = styled.div`
	display: flex;
	justify-content: center;
	

	width: 100%;
	height: 7vh;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;;

	width: 100%;
	max-width: 1366px;
	padding: 0 1.5rem;
`;

const Logo = styled.h1`
	width: 75px;
	height: 28px;
	padding: 0.4rem;

	background: #C4C4C4;

	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: .75rem;
	line-height: .875rem;

	cursor: pointer;
`;

const NavMenu = styled.nav`
	display: flex;
	justify-content: center;

	width: 60%;
`;

const MenuList = styled.ul`
	display: flex;
	list-style: none;
`;

const ListItem = styled.li`
	margin: 0 2rem;

	font-family: Roboto;
	font-weight: 900;
	font-size: .75rem;
	line-height: .875rem;
	color: #98A4B1;

	cursor: pointer;

`;

const BoxBtn = styled.span`
	display: flex;

	width: 20%;
`;

class Header extends Component {

	render() {
		return (
			<Container>
				<Content>
					<Logo>logo</Logo>
					<NavMenu>
						<MenuList>
							<ListItem>Features</ListItem>
							<ListItem>FAQs </ListItem>
							<ListItem>About Us </ListItem>
							<ListItem>Contact Us</ListItem>
						</MenuList>
					</NavMenu>
					<BoxBtn>
						<Button
							background= "#F4F4FC"
							color= "#2751C8"
						>
							Sign in
						</Button>
						<Button
							background= "#2751C8"
							color= "#F4F4FC"
							boxShadow= "0px 4px 4px rgba(0, 0, 0, 0.25)"
						>
							Sign up
						</Button>
					</BoxBtn>
				</Content>
			</Container>
		)
	}
}

export default Header;
