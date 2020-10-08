import React from 'react';
import styled  from 'styled-components';


const Container = styled.div`
	display: flex;
	justify-content: center;
	
	width: 100%;
`;

const Content = styled.div`
	display: flex;
	align-items: center;

	width: 100%;
	height: 50vh;
	max-width: 1366px;
	margin: 0 1.5rem;

  background: #062054;
`;

const WrapAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const BoxDescription = styled.div`
  width: 60%;
  padding-left: 2.5rem;
`;

const TitleFrom = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  display: flex;
  align-items: center;
  color: #98A4B1;
`;

const DescriptionFrom = styled.p`
  width: 45%;
  padding-top: 1.5rem;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: .75rem;
  line-height: .875rem;
  color: #FFF;
`;

function From() {
	return(
		<Container>
      <Content>
        <BoxDescription>
          <TitleFrom>Where does it come from?</TitleFrom>
          <DescriptionFrom>Contrary to popular belief, Lorem Ipsum is not simply random text. 
It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</DescriptionFrom>
        </BoxDescription>
      </Content>
		</Container>
	)
}

export default From;
