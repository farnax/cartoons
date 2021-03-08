import React from 'react';
import styled from 'styled-components';

const StyledTitile = styled.h1`
	color: ${({color}) => color || 'white'};
`;

const Titile = props => (<StyledTitile {...props}/>);

export default Titile;