import type React from "react";

const Hero: React.FC = () => {
	return (
		<section
			className="h-screen flex items-center justify-center bg-cover bg-center relative"
			style={{
				backgroundImage: `url('https://plus.unsplash.com/premium_photo-1682091907070-4985a6fbe6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D')`, // Your image path
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black opacity-50 z-0" />

			{/* Content */}
			<div className="relative z-10 text-center text-white dark:text-gray-900">
				<h2 className="text-5xl font-extrabold mb-4 text-white">
					Hi, I'm Kate
				</h2>
				<p className="text-xl mb-6 text-white">
					Obsessed with Mr. Tugs, spreadsheets, and traveling.
				</p>
				<a
					href="#contact"
					className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-purple-200 dark:bg-gray-900 dark:text-white dark:hover:bg-purple-700"
				>
					Get in Touch
				</a>
			</div>
		</section>
	);
};

export default Hero;
