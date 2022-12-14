import React, { useEffect, useRef, useState } from 'react';
import { URL_IMAGES } from '../../lib/utils';
import CategorieItem from './CategorieItem';

function CategoriesCarousel() {
	const [u, update] = useState<boolean | null>();
	const [categories, setCategories] = useState<any[] | undefined>();
	const sliderRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		update(true);
		setCategories([
			{
				name: 'Alimentos',
				image: `${URL_IMAGES}/platoMexicano.png`,
			},
			{
				name: 'Moda',
				image: `${URL_IMAGES}/shirt.jpg`,
			},
			{
				name: 'Productos para mascotas',
				image: `${URL_IMAGES}/BorderCollie.webp`,
			},
			{
				name: 'Hogar',
				image: `${URL_IMAGES}/House.webp`,
			},
			{
				name: 'Variedades/regalos',
				image: `${URL_IMAGES}/Agenda.webp`,
			},
			{
				name: 'Zapatos',
				image: `${URL_IMAGES}/shoes.jpg`,
			},
			{
				name: 'Artículos de belleza',
				image: `${URL_IMAGES}/beauty.jpg`,
			},
		]);
	}, []);

	const slideLeft = () => {
		// if (slider != null) slider.scrollLeft = slider.scrollLeft - 500;
		sliderRef.current!.scrollLeft -= 500;
		update(!u);
	};
	const slideRight = () => {
		// if (slider != null) slider.scrollLeft = slider.scrollLeft + 500;
		sliderRef.current!.scrollLeft += 500;
		update(!u);
	};

	return (
		<div className="mt-5 ">
			<h2 className="font-semibold text-2xl">Compra por categorias</h2>
			<div className="relative flex flex-row items-center group">
				<button
					className="transition-all h-10 w-10 hover:h-16 hover:w-16 left-0 rounded-full absolute cursor-pointer hidden group-hover:block z-10 bg-medium-violet"
					onClick={slideLeft}
				>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className=" "
							viewBox="0 0 20 20"
							fill="white"
						>
							<path
								fillRule="evenodd"
								d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</button>
				<div
					// className="flex flex-row flex-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative focus-visible:outline-none"
					className="w-full  h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
					id={'slider'}
					ref={sliderRef}
				>
					{categories?.map((cat, index) => (
						<CategorieItem cat={cat} key={index} />
					))}
				</div>
				<button
					className=" transition-all h-10 w-10 hover:h-16 hover:w-16 right-0 rounded-full absolute cursor-pointer hidden group-hover:block z-10 bg-medium-violet border-transparent"
					onClick={slideRight}
				>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className=""
							viewBox="0 0 20 20"
							fill="white"
						>
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</button>
			</div>
		</div>
	);
}

export default CategoriesCarousel;
