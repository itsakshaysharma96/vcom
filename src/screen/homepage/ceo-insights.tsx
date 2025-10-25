"use client";

export function CeoInsights() {
	return (
		<section className="w-full py-20 bg-[#192d62] relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0 bg-gradient-to-r from-[#04174b] to-[#4145b3]"></div>
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
							Insights from Our CEO on Innovation, Partnerships, and What's Next for{" "}
							<span className="text-[#6bebb3]">Vcom Technologies</span>
						</h3>
					</div>
					<div className="flex justify-center lg:justify-end">
						<button className="bg-[#6bebb3] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#5dd1a0] transition-colors flex items-center space-x-3">
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M8 5v14l11-7z"/>
							</svg>
							<span>Watch video</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
