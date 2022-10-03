import { Hero } from '../components/Hero';
import MoreInfo from '../components/MoreInfo';
import { Services } from '../components/Services';

export const Homepage = () => {
	return (
		<div>
			<Hero />
			<Services />
			<MoreInfo />
		</div>
	);
};
