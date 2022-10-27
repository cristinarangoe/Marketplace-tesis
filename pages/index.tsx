import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar-Navigation/Navbar';
import CartItem from '../components/Cart/CartItem';

const Home: NextPage = () => {

	return (
		<div>
			<Navbar />
		</div>
	);
};

export default Home;
