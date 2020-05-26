import React, { useEffect } from 'react';
import api                  from 'utils/api';

const App = () => {

	const getData = async () => {

		const { data } = await api.get('/');

		console.log(data);
	};

	useEffect(() => {

		getData();

	});

	return (
		<div>첫 시작 페이지입니다.</div>
	);
};

export default App;
