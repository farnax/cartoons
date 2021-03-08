import React from 'react';
import styled from 'styled-components';

const StyledFlexElement = styled.div`
	flex-direction: ${({direction}) => direction || 'row'};
	flex-grow: ${({grow}) => grow || '0'};
	flex-shrink: ${({shrink}) => shrink || '1'};
	flex-basis: ${({basis}) => basis || '0%'};
	padding: ${({padding}) => padding || '0'};
`;

const FlexElement = props => (<StyledFlexElement {...props} />);

export default FlexElement;