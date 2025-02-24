import type React from "react";

const About: React.FC = () => {
	return (
		<section
			id="about"
			className="py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center"
		>
			<div className="md:w-1/2 p-6">
				<h3 className="text-3xl font-bold mb-4">About Us</h3>
				<p className="text-lg">
					We’re a passionate team driving innovation in tech. From coding to
					community, we’re here to inspire and build.
				</p>
			</div>
			<div className="md:w-1/2 p-6">
				<img
					src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
					alt="Team working"
					className="rounded-lg shadow-lg"
				/>
			</div>
		</section>
	);
};

export default About;
