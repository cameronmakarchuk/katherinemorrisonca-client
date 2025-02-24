import type React from "react";

const Contact: React.FC = () => {
	return (
		<section id="contact" className="py-20 max-w-6xl mx-auto">
			<h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>
			<form className="flex flex-col space-y-4 max-w-md mx-auto">
				<input
					type="text"
					placeholder="Name"
					className="p-3 rounded-lg bg-gray-800 dark:bg-gray-200 border border-gray-700 dark:border-gray-100"
				/>
				<input
					type="email"
					placeholder="Email"
					className="p-3 rounded-lg bg-gray-800 dark:bg-gray-200 border border-gray-700 dark:border-gray-100"
				/>
				<textarea
					placeholder="Message"
					className="p-3 rounded-lg bg-gray-800 dark:bg-gray-200 border border-gray-700 dark:border-gray-100 h-32"
				/>
				<button
					type="submit"
					className="text-white bg-purple-600 p-3 rounded-lg font-semibold hover:bg-purple-700"
				>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default Contact;
