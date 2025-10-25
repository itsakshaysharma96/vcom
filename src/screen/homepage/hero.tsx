"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/public/banner.png"
export function Hero() {
	return (
		<section className="relative w-full h-[700px] overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0">
				<Image
					src={Banner}
					alt="IT Infrastructure Background"
					fill
					className="object-cover"
					priority
				/>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black/46" />
			</div>

			{/* Content */}
			<div className="relative z-10 h-full flex items-center">
				<div className="max-w-7xl mx-auto px-6 w-full">
					<div className="max-w-2xl">
						<h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
							Your Trusted IT Infrastructure Partner
						</h1>
						<p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
							Building agile, scalable, and future-ready technology solutions for your business.
						</p>
						<Button
							asChild
							className="bg-transparent border-2 border-[#6bebb3] text-white hover:bg-[#6bebb3] hover:text-black px-8 py-3 text-lg font-medium transition-all duration-300"
						>
							<Link href="#services">
								Know More
								<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
