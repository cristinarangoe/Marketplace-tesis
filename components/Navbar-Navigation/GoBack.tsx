import Link from 'next/link';
import React from 'react';
import { text } from 'stream/consumers';

interface GoBackProps {
	link: string;
	text: string;
}

const GoBack: React.FC<GoBackProps> = ({ link, text }) => {
	return (
		<div className="pt-5 ml-5 cursor-pointer">
			<Link href={link}>
				<div className="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6 mr-2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
						/>
					</svg>
					<p>{text}</p>
				</div>
			</Link>
		</div>
	);
};

export default GoBack;
