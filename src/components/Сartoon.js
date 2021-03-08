import React from 'react';
import styled from 'styled-components';
import Flex from './styled/Flex';
import FlexElement from './styled/FlexElement';
import Image from './styled/Image';
import Paragraph from './styled/Paragraph';
import Block from './styled/Block';
import { Link } from 'react-router-dom';

const StyledLink = 	styled(Link)`
  padding: 5px;
  color: white;
  text-decoration: none;
  font-size: 24px;
  &:hover {
    color: red;
    background: white;
  };
`;

const Cartoon = ({ cartoon }) => {
	const {id, image, name, gender} = cartoon;
	return (
		<Block>
			<Flex>
				<FlexElement grow='2' shrink='1'>
					<Image src={image} />
				</FlexElement>
				<FlexElement grow='2' shrink='1' padding='1rem'>
					<StyledLink to={{pathname: `/cartoons/${id}`}}>
						Name: {name}
					</StyledLink>
					<Paragraph font='24px' align='left'>
						Gender: {gender}
					</Paragraph>
				</FlexElement>
			</Flex>
		</Block>
	); 
};

export default Cartoon;