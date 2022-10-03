import React from 'react';
import { Button1 } from './Button';
import { FiCheck } from 'react-icons/fi';
import Image from 'next/image';
import ProfilePhoto from '../public/assets/profile-photo.jpg';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

export const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__content">
				<h1 className="hero--title">Freelance Web Developer</h1>
				<p className="hero__desc hero--white-text">
					Hey there,
					<span role="img" aria-label="hand wave" className="wave">
						👋🏾
					</span>
					i’m Sam, a freelance web developer with experience building and designing{' '}
					<RoughNotationGroup show={true}>
						<RoughNotation type="highlight" color="#FFFF00" order="1">
							beautiful {' , '}
						</RoughNotation>
						<RoughNotation type="highlight" color="#FFFF00" order="2">
							responsive{' '}
						</RoughNotation>
						and{' '}
						<RoughNotation type="highlight" color="#FFFF00" order="3">
							modern
						</RoughNotation>
					</RoughNotationGroup>{' '}
					websites with React.
				</p>
				<div className="hero__list">
					<h2 className="hero__list--sub">If you&apos;re looking for:</h2>
					<ul className="hero__listings">
						<li className="hero--l hero--white-text">
							<span>
								<FiCheck className="hero--check" />
							</span>
							Someone to modernise your current website
						</li>
						<li className="hero--l hero--white-text">
							<span>
								<FiCheck className="hero--check" />
							</span>
							A way to increase exposure to potential clients on Google
						</li>
						<li className="hero--l hero--white-text">
							<span>
								<FiCheck className="hero--check" />A fast and responsive site for your new <span className="hero--span">business</span>
							</span>
						</li>
					</ul>
					<p className="hero--sub hero--white-text">You&apos;ve come to the right place, scroll down to see more!</p>
				</div>
				<div className="hero__btn">
					<Button1 text="Get your website" />
				</div>
			</div>
			<div>
				<Image className="profile" src={ProfilePhoto} alt="Photosnap logo" width={400} height={400} />
			</div>
		</section>
	);
};
