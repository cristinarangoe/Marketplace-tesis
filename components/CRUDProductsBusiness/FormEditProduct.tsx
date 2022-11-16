import React from 'react';
import { useForm } from 'react-hook-form';
import { updateProduct } from '../../lib/business/products';
import { Item } from '../../types';
import { DBProduct } from '../../types/products';

type FormData = {
	name: string;
	price: number;
	description: string;
	image: string;
	stock: number;
};

interface ItemProps {
	product: Item;
}

const FormEditProduct: React.FC<ItemProps> = ({ product }) => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit = handleSubmit(async (data) => {
		const tmp = await updateProduct(data, product._id);
		console.log(tmp);
	});
	return (
		<div className=''>
			<form
				onSubmit={onSubmit}
				className="flex flex-col items-center mx-auto bg-white px-5 w-1/2 shadow-lg rounded-xl mt-8 py-5 border"
			>
				<h2 className='font-semibold text-3xl'>
					Añade un producto nuevo{' '}
				</h2>
				<div className="flex flex-col w-1/2 pt-3">
					<label className="">Nombre del producto:</label>
					<input
						defaultValue={product.name}
						placeholder={product.name}
						{...register('name', { required: true })}
						className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
					/>
				</div>
				<div className="flex flex-col w-1/2 pt-3">
					<label className="">Precio del producto:</label>
					<input
						type="number"
						defaultValue={product.price}
						placeholder={product.price.toString()}
						{...register('price', { required: true })}
						className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
					/>
				</div>
				<div className="flex flex-col w-1/2 pt-3">
					<label className="">Descripción del producto:</label>
					<input
						defaultValue={product.description}
						placeholder={product.description}
						{...register('description', { required: true })}
						className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
					/>
				</div>
				<div className="flex flex-col w-1/2 pt-3">
					<label className="">URL de la imágen del producto</label>
					<input
						defaultValue={product.image}
						placeholder={product.image}
						{...register('image', { required: true })}
						className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
					/>
				</div>
				<div className="flex flex-col w-1/2 pt-3">
					<label className="">Cantidad de unidades en inventario</label>
					<input
						type="number"
						defaultValue={0}
						placeholder={'stock'}
						{...register('stock', { required: true })}
						className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
					/>
				</div>

				<input
					type="submit"
					value="Añadir producto"
					className=" mt-5 mx-auto py-2 px-3 rounded-md bg-medium-violet text-white font-semibold"
				/>
			</form>
		</div>
	);
};

export default FormEditProduct;
