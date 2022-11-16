import React from 'react';

const CircleNavigation = ({ href }: { href: string }) => {
	return (
		<a href={href}>
			<span className="inline-block rounded-full bg-gray-500 h-3.5 w-3.5 mt-3"></span>
		</a>
	);
};

export default CircleNavigation;
