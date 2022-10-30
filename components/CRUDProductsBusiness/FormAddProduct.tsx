import React, { useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import { GenericInput } from '../genericInput';

type FormData = {
	name: string;
	price: number;
	description: string;
	name2: string;
	price2: number;
};

interface StageProps {
	register: UseFormRegister<FormData>;
}

const FirstStage = ({ register }: StageProps) => {
	return (
		<>
			<h4 className="text-center text-lg font-bold">Primera etapa</h4>
			<GenericInput
				label="Nombre del producto"
				inputProps={register('name', { required: true })}
			/>
			<GenericInput
				label="Precio"
				inputProps={register('price', { required: true })}
			/>
			<div className="flex flex-col justify-start ">
				<label className="text-gray-700">Descripción:</label>
				<textarea
					{...register('description', { required: true })}
					className="mr-8 p-1 rounded-md w-full"
				/>
			</div>
		</>
	);
};

const SecondStage = ({ register }: StageProps) => {
	return (
		<>
			<h4 className="text-center text-lg font-bold">Segunda etapa</h4>
			<GenericInput
				label="Nombre del producto stage2"
				inputProps={register('name2', { required: true })}
			/>
			<GenericInput
				label="Precio stage 2"
				inputProps={register('price2', { required: true })}
			/>
		</>
	);
};

const stageNumner = 2;

interface StageSelectorProps {
	stage: number;
	register: UseFormRegister<FormData>;
}

const StageSelector = ({
	stage,
	register,
}: StageSelectorProps): JSX.Element => {
	const stageMap: Map<number, JSX.Element> = new Map();
	stageMap.set(1, <FirstStage register={register} />);
	stageMap.set(2, <SecondStage register={register} />);

	const val = stageMap.get(stage);

	if (val) return val;

	return <p>errors</p>;
};

const FormAddProduct = () => {
	const [stage, setStage] = useState(1);
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit = handleSubmit((data) => console.log(data));

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-3xl">Agregar producto a catalogo</h1>
			<form
				onSubmit={onSubmit}
				className="flex flex-col mx-auto bg-purple-200 border-purple-400 border-2 px-5 w-max py-6 mt-8 rounded-md gap-4"
			>
				{stage}
				<StageSelector stage={stage} register={register} />
				{stage <= 2 ? (
					<button
						className=" mt-5 mx-auto py-1 px-3 rounded-md bg-purple-700 text-white"
						onClick={() => setStage((i) => i + 1)}
						type="button"
					>
						Continuar
					</button>
				) : (
					<button
						className=" mt-5 mx-auto py-1 px-3 rounded-md bg-purple-700 text-white"
						type="submit"
					>
						Continuar
					</button>
				)}
			</form>
		</div>
	);
};

export default FormAddProduct;
