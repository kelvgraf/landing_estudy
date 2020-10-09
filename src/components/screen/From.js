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

const BoxDescription = styled.div`
  width: 60%;
  padding-left: 2.5rem;
`;

const TitleFrom = styled.h2`
  font-family: 'Roboto';;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  display: flex;
  align-items: center;
  color: #98A4B1;
`;

const DescriptionFrom = styled.p`
  width: 26.875rem;
  padding-top: 2.5rem;

  font-family: 'Roboto';;
  font-style: normal;
  font-weight: normal;
  font-size: .75rem;
  line-height: 1.25rem;
  text-align: left;
  color: #FFF;
`;

const BoxCircle = styled.div`
  position: relative;
`;

const CircleOne = styled.div`
	width: 10rem;
	height: 10rem;
  background: rgba(199, 199, 199, 0.4);;
  border-radius: 50%;
`;

const CircleTwo = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 6rem;

	width: 10rem;
	height: 10rem;
  background: rgba(199, 199, 199, 0.4);;
  border-radius: 50%;
`;

const CircleThree = styled.div`
  position: absolute;
  top: 7.5rem;

	width: 10rem;
	height: 10rem;
  background:rgba(199, 199, 199, 0.4);;
  border-radius: 50%;
`;

function From() {
	return(
		<Container>
      <Content>
        <BoxDescription>
          <TitleFrom>Where does it come from?</TitleFrom>
          <DescriptionFrom>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin  iterature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical iterature, discovered the undoubtable source.</DescriptionFrom>
        </BoxDescription>
        <BoxCircle>
          <CircleOne></CircleOne>
          <CircleTwo></CircleTwo>
          <CircleThree></CircleThree>
        </BoxCircle>
      </Content>
		</Container>
	)
}

export default From;
