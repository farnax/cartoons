import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestCartoons} from '../redux/actions';
import Сartoon from './Сartoon';

import Paragraph from './styled/Paragraph';
import Title from './styled/Title';
import Flex from './styled/Flex';

const Cartoons = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [fetching, setFetching] = useState(true);

	const cartoons = useSelector(state => state.cartoons.cartoons);
  const total = useSelector(state => state.cartoons.total);
	const loading = useSelector(state => state.cartoons.loading);
	const error = useSelector(state => state.cartoons.error);
	const dispatch = useDispatch();

	useEffect(() => {
		if (fetching && (cartoons.length <= total)) {
			dispatch(requestCartoons(currentPage));
			setCurrentPage(prev => prev + 1);
			setFetching(false);
		}
  }, [fetching]);
 
	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
		return () => {
			document.removeEventListener('scroll', scrollHandler);
		}
	});

  const scrollHandler = e => {
  	const {scrollHeight, scrollTop} = e.target.documentElement;
  	if ((scrollHeight - (scrollTop + window.innerHeight) < 100)) {
  		setFetching(true);
  	}
  };
  if (loading) {
  	return (
  		<Paragraph>
  			Loaging...
  		</Paragraph>
  	)
  }
  if (error) {
  	return (
  		<Paragraph>
  		  Try later
  		</Paragraph>
  	)
  }
	return (
		<Flex align='center' direction='column'>
			<Title color='blue'>
				Cartoons
			</Title>
			{cartoons.map(cartoon => <Сartoon cartoon={cartoon} key={cartoon.id} />)}
		</Flex>
	);
};
	
export default Cartoons;