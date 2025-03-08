import type React from "react";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDark, setIsDark] = useState(true);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Toggle theme
	const toggleTheme = () => {
		setIsDark(!isDark);
		if (isDark) {
			document.documentElement.classList.remove("dark");
		} else {
			document.documentElement.classList.add("dark");
		}
	};

	// Optional: Sync with system preference or localStorage on mount
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "light") {
			setIsDark(false);
			document.documentElement.classList.remove("dark");
		} else {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	// Save preference
	useEffect(() => {
		localStorage.setItem("theme", isDark ? "dark" : "light");
	}, [isDark]);

	return (
		<nav className="fixed top-0 w-full bg-gray-800 dark:bg-gray-100 p-4 shadow-md z-100 opacity-80">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<h1 className="text-2xl font-bold text-white dark:text-gray-900">KM</h1>

				{/* Hamburger Icon (visible on mobile) */}
				<button
					type="button"
					className="md:hidden text-white dark:text-gray-900 focus:outline-none"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						{isOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>

				{/* Nav Links */}
				<div className="flex items-center">
					<ul
						className={`${
							isOpen ? "block" : "hidden"
						} md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 dark:bg-gray-100 dark:md:bg-transparent md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out`}
					>
						<li>
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="#about"
								className="block py-2 text-white dark:text-gray-900 hover:text-purple-400 dark:hover:text-purple-600"
								onClick={() => setIsOpen(false)}
							>
								About
							</a>
						</li>
						<li>
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="#services"
								className="block py-2 text-white dark:text-gray-900 hover:text-purple-400 dark:hover:text-purple-600"
								onClick={() => setIsOpen(false)}
							>
								Services
							</a>
						</li>
						<li>
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="#contact"
								className="block py-2 text-white dark:text-gray-900 hover:text-purple-400 dark:hover:text-purple-600"
								onClick={() => setIsOpen(false)}
							>
								Contact
							</a>
						</li>
					</ul>

					{/* Theme Toggle */}
					<button
						type="button"
						onClick={toggleTheme}
						className="ml-4 p-2 text-white dark:text-gray-900 hover:text-purple-400 dark:hover:text-purple-600"
						aria-label="Toggle theme"
					>
						{isDark ? (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Light Toggle</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							</svg>
						) : (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Dark Toggle</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
