"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Insights() {
	const insights = [
		{
			title: "Workforce Skills Forecast 2025",
			description: "Here's the roadmap to navigate the AI-work crossroads. Discover the new AI skills you'll need, where job growth will soar, and ways to future-proof your career in an AI-enabled world.",
			badges: ["2025", "Workforce", "Skills", "Forecast"],
			isMain: true
		},
		{
			title: "2025 Gartner® Magic Quadrant™ for AI Applications in IT Service Management",
			type: "Blog"
		},
		{
			title: "2025 Gartner® Critical Capabilities for Enterprise Low-Code Applications",
			type: "Blog"
		},
		{
			title: "Enterprise AI Maturity Index 2025",
			type: "Blog"
		}
	];

	return (
		<section className="w-full py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
						Latest Insights and Innovations
					</h2>
					<p className="text-xl text-black max-w-4xl mx-auto leading-relaxed mb-8">
						Our technology and industry experts share knowledge on tackling today's business and digital transformation challenges. Get key tips and insights to inspire new thinking, avoid pitfalls and drive higher results.
					</p>
					<Button asChild className="bg-[#6bebb3] text-black hover:bg-[#5dd1a0] px-12 py-4 text-lg font-semibold rounded-[50px] transition-colors">
						<Link href="/blogs">
							View Blogs
						</Link>
					</Button>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Main Insight */}
					<div className="lg:col-span-1">
						<div className="bg-[#091e58] rounded-[25px] h-[876px] relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-[#091e58] to-[#2e3192] rounded-[25px]" />
							<div className="relative z-10 p-8 h-full flex flex-col justify-between">
								<div>
									<div className="flex items-center space-x-4 mb-6">
										{insights[0].badges.map((badge, index) => (
											<span
												key={badge}
												className={`px-4 py-2 rounded-full text-lg font-bold ${
													index === 0 || index === 1
														? 'text-[#6bebb3]'
														: 'text-white'
												}`}
											>
												{badge}
											</span>
										))}
									</div>
									<h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
										{insights[0].title}
									</h3>
									<p className="text-lg text-white leading-relaxed">
										{insights[0].description}
									</p>
								</div>
								<Link href="/blog/workforce-skills-forecast" className="inline-flex items-center text-[#6bebb3] hover:underline font-semibold text-lg">
									Read Blog
								</Link>
							</div>
						</div>
					</div>

					{/* Side Insights */}
					<div className="space-y-6">
						{insights.slice(1).map((insight) => (
							<div key={insight.title} className="bg-[rgba(9,30,88,0.48)] rounded-[25px] h-[271px] relative overflow-hidden">
								<div className="absolute left-0 top-0 w-[306px] h-full bg-gradient-to-b from-[#091e58] to-[#2e3192] rounded-l-[25px]" />
								<div className="absolute right-0 top-0 w-[221px] h-[196px] bg-gray-300 rounded-[10px] m-4" />
								<div className="relative z-10 p-6 h-full flex flex-col justify-between">
									<div>
										<span className="text-white text-sm mb-2 block">{insight.type}</span>
										<h3 className="text-2xl font-bold text-white mb-4 leading-snug">
											{insight.title}
										</h3>
									</div>
									<Link href="/blog" className="inline-flex items-center text-[#6bebb3] hover:underline font-semibold text-lg">
										Read Blog
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
