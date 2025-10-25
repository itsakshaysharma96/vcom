"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SuccessStories() {
	const stories = [
		{
			title: "Authentic AI Conversations",
			description: "A wellness tech leader boosts customer engagement and support speed with AI-powered virtual assistants and conversational analytics.",
			image: "https://www.figma.com/api/mcp/asset/36d21991-b7fe-4a92-97b0-77889de5574b",
			category: "SUCCESS STORY"
		},
		{
			title: "Leading wealth manager redefines elite client engagement",
			image: "https://www.figma.com/api/mcp/asset/e33f14be-d282-4b13-9a2d-673cb9858778",
			category: "SUCCESS STORY"
		},
		{
			title: "Global bank sharpens trading precision with cloud insights",
			image: "https://www.figma.com/api/mcp/asset/118283bc-608e-43ad-b5aa-598a1e705278",
			category: "SUCCESS STORY"
		}
	];

	return (
		<section className="w-full py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold text-black mb-8">
						Satisfied Clients Worldwide
					</h2>
					<p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
						More than 200 companies turn to Vcom Technologies to drive their businesses forward in the age of digital transformation. See why.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main Story */}
					<div className="lg:col-span-1">
						<div className="relative h-[880px] rounded-lg overflow-hidden">
							<Image
								src={stories[0].image}
								alt={stories[0].title}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-8 bg-white/90 backdrop-blur-sm">
								<span className="text-sm font-semibold text-black mb-2 block">
									{stories[0].category}
								</span>
								<h3 className="text-3xl font-bold text-black mb-4">
									{stories[0].title}
								</h3>
								<p className="text-black mb-6 leading-relaxed">
									{stories[0].description}
								</p>
								<Button className="bg-[#6bebb3] text-black hover:bg-[#5dd1a0] px-6 py-3 rounded-[50px] font-semibold">
									Learn More
								</Button>
							</div>
						</div>
					</div>

					{/* Side Stories */}
					<div className="lg:col-span-2 space-y-8">
						{stories.slice(1).map((story) => (
							<div key={story.title} className="flex gap-6">
								<div className="w-[402px] h-[584px] relative rounded-lg overflow-hidden flex-shrink-0">
									<Image
										src={story.image}
										alt={story.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex-1 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
									<span className="text-sm font-semibold text-black mb-2 block">
										{story.category}
									</span>
									<h3 className="text-2xl font-bold text-black">
										{story.title}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Navigation Arrows */}
				<div className="flex justify-center mt-12 space-x-4">
					<button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
