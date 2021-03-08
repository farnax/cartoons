import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
	width: ${({width}) => width || '50%'};
	background: grey;
	border: 2px solid black;
	border-radius: 10px;
	margin: 2%;
	overflow: hidden;
`;

const Block = props => (<StyledBlock {...props} />);

export default Block;