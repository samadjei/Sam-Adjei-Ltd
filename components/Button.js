import Image from 'next/image';

export const Button1 = ({ text }) => {
	return <button className="btn__flex btn--primary body--medium btn--text-white">{text}</button>;
};
