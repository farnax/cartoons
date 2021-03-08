import React from 'react';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Flex from './styled/Flex';
import FlexElement from './styled/FlexElement';
import Paragraph from './styled/Paragraph';
import Block from './styled/Block';
import Image from './styled/Image';

const CartoonInfo = () => {
	const {id} = useParams();
	const cartoons = useSelector(state => state.cartoons.cartoons[id - 1]);
	const { image, gender, name, species, status} = cartoons;
	return (
		<Flex justify='center'>
			<Block width='40%'>
				<FlexElement>
					<Image src={image} />
				</FlexElement>
				<FlexElement grow='2' shrink='1' padding='1rem'>
					<Paragraph font='18px'>Gender: {gender}</Paragraph>
				</FlexElement>
				<FlexElement grow='2' shrink='1' padding='1rem'>
					<Paragraph font='16px'>Name: {name}</Paragraph>
				</FlexElement>
				<FlexElement grow='2' shrink='1' padding='1rem'>
					<Paragraph font='16px'>Species: {species}</Paragraph>
				</FlexElement>
				<FlexElement grow='2' shrink='1' padding='1rem'>
					<Paragraph font='16px'>Status: {status}</Paragraph>
				</FlexElement>
			</Block>
		</Flex>
	);
};

export default CartoonInfo;