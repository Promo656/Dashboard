import './style.css';
export const Drawer = () => {
	return (
		<div className="menu">
			<div className="title">MENU</div>
			<ul className="nav">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Work</a>
				</li>
				<li>
					<a href="#">Resources</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</div>
	);
};
