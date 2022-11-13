import Image from 'next/image';
import React from 'react';

function CarouselItem({ item, id }: { item: any; id: number }) {
	return (
		<div
			id={'item' + id}
			className="carousel-item w-full flex flex-row items-center justify-center"
		>
			<div className="basis-1/2 px-10 ">
				<h2 className="font-semibold text-4xl pb-6">{item.heading1}</h2>
				<h2 className="text-xl">{item.heading2}</h2>
			</div>
			<div className="basis-1/2 px-10 flex justify-center">
				<Image src={item.image} height="200" width="200" />
			</div>
		</div>
	);
}

export default CarouselItem;
