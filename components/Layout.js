import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Sam Adjei | Freelance Web Developer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			</Head>
			<div className="bg">
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;
