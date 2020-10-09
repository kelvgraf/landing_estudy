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
	height: 100vh;
	max-width: 1366px;
	padding: 0 1.5rem;
`;

const WrapAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const BoxImg = styled.figure`
  display: flex; 
  align-items: center;
  justify-content: center;

  width: 358px;
  height: 478px;

  background: #C4C4C4;

  p {
    font-family: 'Roboto';;
    font-weight: bold;
    font-size: .875rem;
    line-height: 1.25rem;
    display: flex;
    align-items: center;
  }
`;

const BoxDescription = styled.div`
  width: 60%;
`;

const TitleAbout = styled.h2`
  font-family: "Roboto";
  font-weight: bold;
  font-size: .875rem;
  line-height: 1rem;
  display: flex;
  align-items: center;
`;

const DescriptionAbout = styled.p`
  width: 28.8125rem;
  padding-top: 2.5rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: .75rem;
  line-height: 1.25rem;
  text-align: left;
  color: #000;
`;

function About() {
	return(
		<Container>
      <Content>
        <WrapAbout>
          <BoxImg>
            <p>Imagem</p>
          </BoxImg>
          <BoxDescription>
            <TitleAbout>What is Lorem Ipsum?</TitleAbout>
            <DescriptionAbout>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</DescriptionAbout>
          </BoxDescription>
        </WrapAbout>
      </Content>
		</Container>
	)
}

export default About;
