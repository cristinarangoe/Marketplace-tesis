import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputProsps {
	label: string;
	inputProps: DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;
}

export const GenericInput = ({ label, inputProps }: InputProsps) => {
	return (
		<div className="flex flex-col justify-start">
			<label className="text-gray-700">{label}</label>
			<input {...inputProps} className="mr-8 p-1 mt-2 rounded-md w-full" />
		</div>
	);
};
