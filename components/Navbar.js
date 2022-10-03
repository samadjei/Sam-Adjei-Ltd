import { useState } from 'react';
import Link from 'next/link';
import { Button1 } from './Button';

export const Navbar = () => {
	const [isOpen, setisOpen] = useState(false);
	return (
		<div>
			<nav className="navbar">
				<div className="navbar__container">
					<div className="navbar__logo">
						<Link href="/">
							<h3>Sam Adjei</h3>
						</Link>
					</div>
					<div className="navbar__right">
						<ul className="navbar__links">
							<li>
								<Link href="/">
									<a className="navbar__links-items">Work</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a className="navbar__links-items">Services</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a className="navbar__links-items">About</a>
								</Link>
							</li>
						</ul>
						<Button1 text="Hire Me" />
					</div>
				</div>
			</nav>
		</div>
	);
};
