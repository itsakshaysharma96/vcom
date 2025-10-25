"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Partners() {
	const partners = [
		{ name: "Partner 1", logo: "https://www.figma.com/api/mcp/asset/51eb5198-411f-44d7-8cb6-4405f7124038" },
		{ name: "Partner 2", logo: "https://www.figma.com/api/mcp/asset/51eb5198-411f-44d7-8cb6-4405f7124038" },
		{ name: "Partner 3", logo: "https://www.figma.com/api/mcp/asset/51eb5198-411f-44d7-8cb6-4405f7124038" },
		{ name: "Partner 4", logo: "https://www.figma.com/api/mcp/asset/51eb5198-411f-44d7-8cb6-4405f7124038" },
		{ name: "Partner 5", logo: "https://www.figma.com/api/mcp/asset/51eb5198-411f-44d7-8cb6-4405f7124038" },
		{ name: "Partner 6", logo: "https://www.figma.com/api/mcp/asset/51eb5198-411f-44d7-8cb6-4405f7124038" }
	];

	return (
		<section className="w-full py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold text-black mb-8">
						More Than Possible
					</h2>
					<p className="text-xl text-black max-w-4xl mx-auto leading-relaxed mb-8">
						We team with world-class partners to bring your Cloud, Digital Transformation, AI, IoT and other technology solutions to life. We can further pinpoint precise solutions with industry and use case-specific partners to drive your business forward.
					</p>
					<Button className="bg-[#6bebb3] text-black hover:bg-[#5dd1a0] px-8 py-3 rounded-[50px] font-semibold">
						View all partners
					</Button>
				</div>

				{/* Partners Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
					{partners.map((partner) => (
						<div key={partner.name} className="flex items-center justify-center h-[92px] w-[158px]">
							<Image
								src={partner.logo}
								alt={partner.name}
								width={158}
								height={92}
								className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
