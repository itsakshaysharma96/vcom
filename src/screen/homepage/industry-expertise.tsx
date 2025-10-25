"use client";

export function IndustryExpertise() {
	const industries = [
		{ name: "Life Sciences", icon: "🧬" },
		{ name: "Healthcare", icon: "🏥" },
		{ name: "Insurance", icon: "🛡️" },
		{ name: "Banking and Financial services", icon: "🏦" },
		{ name: "Retail", icon: "🛍️" },
		{ name: "High Tech", icon: "💻" },
		{ name: "Consumer Packaged Goods", icon: "📦" },
		{ name: "Communications", icon: "📡" }
	];

	return (
		<section className="w-full py-20 bg-[#091e58] relative">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold text-white mb-8">
						Industry Expertise
					</h2>
					<p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
						Your industry is on the move. We understand where it's going. We align your technology solutions to meet or exceed industry benchmarks, optimize service levels, and generate more operational efficiencies to meet competitive pressures and capture more opportunities.
					</p>
				</div>

				{/* Industry Grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{industries.map((industry) => (
						<div
							key={industry.name}
							className="bg-[#091e58] border border-[#a7a7a7] h-[234px] rounded-lg flex flex-col items-center justify-center text-center p-6 hover:border-[#6bebb3] transition-colors duration-300"
						>
							<div className="text-4xl mb-4">{industry.icon}</div>
							<h3 className="text-white text-lg font-medium">
								{industry.name}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
