import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<header className="padding-x py-8 z-10 w-full bg-slate-300">
				<nav className="flex justify-between max-container">
					<Link
						to="/"
						className="font-montstreet text-3xl leading-normal font-extrabold text-gray-900">
						Azure CI/CD
					</Link>

					<ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
						<li>
							<Link
								to="/users"
								className="font-montserrat leading-normal text-lg text-slate-gray">
								Users
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
