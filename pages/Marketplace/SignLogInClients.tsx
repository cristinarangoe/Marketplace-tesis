import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import FormLogIn from '../../components/SignLogIn/FormLogIn';
import FormSignInClients from '../../components/SignLogIn/FormSignInClients';
import Navbar from '../../components/Navbar-Navigation/Navbar';
import GoBack from '../../components/Navbar-Navigation/GoBack';
import TabsSignIn from '../../components/SignLogIn/TabsSignIn';
import FormSignInBusiness from '../../components/SignLogIn/FormSignInBusiness';

const SignLogInClients = () => {
	return (
		<div>
			<GoBack link="/Marketplace/Home">Inicio</GoBack>
			<div className="flex flex-col justify-center md:max-w-[640px] mx-auto mt-3 md:my-8 md:rounded-lg">
				<h2 className="mx-auto">Hola, eres un cliente</h2>
				<TabsSignIn client={<FormSignInClients/>} business={<FormSignInBusiness/>}/>
			</div>
		</div>
	);
};

export default SignLogInClients;
