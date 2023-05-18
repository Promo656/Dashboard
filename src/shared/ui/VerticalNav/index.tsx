import { JSX } from 'react';
import './style.css';

const menus = [
	{ name: 'Dashboard' },
	{ name: 'Home' },
	{ name: 'Health' },
	{ name: 'Calendar' },
];

export const VerticalNav = (): JSX.Element => {
	return (
		<div className="wrap">
			<ul>
				{menus.map((menu) => (
					<li>{menu.name}</li>
				))}
			</ul>
		</div>
	);
};
