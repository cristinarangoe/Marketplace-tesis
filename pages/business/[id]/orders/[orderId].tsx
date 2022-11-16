import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import useSWR from 'swr';
import GoBack from '../../../../components/Navbar-Navigation/GoBack';
import Loading from '../../../../components/Navbar-Navigation/Loading';
import NavbarBusiness from '../../../../components/Navbar-Navigation/NavbarBusiness';
import VerticalNavbarBusiness from '../../../../components/Navbar-Navigation/VerticalNavbarBusiness';
import ProductInOrderItem from '../../../../components/OrdersBusiness/ProductInOrderItem';
import BusinessLayout from '../../../../layouts/BusinessLayout';
import { URL_BUSINESS } from '../../../../lib/business/products';
import fetcher from '../../../../lib/utils';
import { userSignal } from '../../../../signals/userSignal';
import { Address, Client, ItemInCart, Order } from '../../../../types';
import { OrderBussinessDB } from '../../../../types/business';

function SpecificOrderContainer() {
	const router = useRouter();
	const { id, orderId } = router.query;
	const { data, error } = useSWR<OrderBussinessDB, Error>(
		`${URL_BUSINESS}/${id}/order/${orderId}`,
		fetcher
	);

	if (error)
		return (
			<div>
				<p>error</p>
			</div>
		);

	if (!data) return <Loading />;

	const order = data;

	return (
		<div className="mx-8 mt-5 w-full">
			<GoBack link="/business/OrdersViewPage" text="Órdenes" />
			<div className="flex mt-3 items-end">
				<h2 className="text-4xl font-bold mr-3">#{order._id}</h2>
				<h2>{Date.now()}</h2>
			</div>

			<div className="flex flex-row my-5">
				<div className="mr-5 bg-gray-100 shadow-md basis-2/3 px-3 py-5 h-full">
					<h2 className="text-2xl mb-5 font-medium">Detalles de la orden</h2>
					<div className="flex flex-row items-center border-b-2 border-b-gray-300">
						<div className="basis-2/5 mx-auto">
							<h3>Producto</h3>
						</div>
						<div className="basis-1/5 mx-auto">
							<h3>Precio</h3>
						</div>
						<div className="basis-1/5">
							<h3>Cantidad</h3>
						</div>
						<div className="basis-1/5">
							<h3>Total</h3>
						</div>
					</div>
					<div className="">
						{order.products.map((product, index) => (
							<ProductInOrderItem prod={product} key={index} />
						))}
					</div>
					<div className="mt-5">
						<div className="flex flex-row">
							<div className="flex flex-col">
								<h4 className="pb-3">Sub total</h4>
								<h4 className="pb-3">Envío</h4>
								<h4 className="pb-3">Total de la compra</h4>
							</div>
							<div className="flex flex-col ml-8">
								<div className="flex flex-col">
									<h4 className="pb-3">
										{order.totalPrice - order.shippingPrice}
									</h4>
									<h4 className="pb-3">{order.shippingPrice}</h4>
									<h4 className="pb-3">{order.totalPrice}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-gray-100 shadow-md basis-1/3 px-3 py-5 h-full">
					<h2 className="text-2xl mb-5 font-medium">Cliente</h2>
					<div className="border-b-2 border-b-gray-300 pb-3">
						<h3 className="pt-2">{order.client.firstLastName}</h3>
						<h3 className="pt-2">{order.client.ID}</h3>
					</div>
					<div className="pt-3 border-b-2 border-b-gray-300 pb-3">
						<h2 className="text-xl">Información de contacto</h2>
						<h3 className="pt-2">{order.client.email}</h3>
						<h3 className="pt-2">{order.client.phone}</h3>
					</div>
					<div className="pt-3">
						<h2 className="text-xl">Información de envío</h2>
						{/* <h3 className="pt-2">{order.client.shippingAdress}</h3> */}
					</div>
				</div>
			</div>
		</div>
	);
}

SpecificOrderContainer.getLayout = function getLayout(page: ReactElement) {
	return <BusinessLayout>{page}</BusinessLayout>;
};

export default SpecificOrderContainer;
