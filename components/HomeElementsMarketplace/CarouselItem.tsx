import Image from 'next/image';
import React from 'react';

function CarouselItem({ item, id }: { item: any; id: number }) {
	return (
		<div
			id={'item' + id}
			className="carousel-item w-full flex flex-row items-center justify-center "
		>
			<div className="basis-1/2 px-10 ">
				<h2 className="font-bold text-4xl pb-6 text-tiffany-green">{item.heading1}</h2>
				<h2 className="text-2xl font-semibold">{item.heading2}</h2>
			</div>
			<div className="basis-1/2 px-10 flex justify-center relative h-[20rem] w-auto">
				<Image src={item.image} layout="fill" objectFit='contain' />
			</div>
		</div>
	);
}

export default CarouselItem;
