import React from 'react';

export const Title = ({ title }) => {
	return (
		<div className="title">
			<h2>{title || 'default title'}</h2>
		</div>
	);
};
