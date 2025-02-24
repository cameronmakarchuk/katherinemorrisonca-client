import type React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900">
			{" "}
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default App;
