import type React from "react";

const Services: React.FC = () => {
	return (
		<section id="services" className="py-20 bg-gray-800 dark:bg-gray-200">
			<div className="max-w-6xl mx-auto text-center">
				<h3 className="text-3xl font-bold mb-10">Our Services</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="p-6 bg-gray-700 dark:bg-gray-100 rounded-lg">
						<h4 className="text-xl font-semibold mb-2">Content Creation</h4>
						<p>High-quality tech content that resonates.</p>
					</div>
					<div className="p-6 bg-gray-700 dark:bg-gray-100 rounded-lg">
						<h4 className="text-xl font-semibold mb-2">Consulting</h4>
						<p>Expert guidance for your tech journey.</p>
					</div>
					<div className="p-6 bg-gray-700 dark:bg-gray-100 rounded-lg">
						<h4 className="text-xl font-semibold mb-2">Community Building</h4>
						<p>Connecting innovators worldwide.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
