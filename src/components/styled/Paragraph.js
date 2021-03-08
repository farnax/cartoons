import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
	text-align: ${({align}) => align || 'center'};;
	font-size: ${({font}) => font || '42px'};
	color: white;
	padding: 0.1rem;
	margin: 10px;
`;

const Paragraph = props => (<StyledParagraph {...props} />);

export default Paragraph;