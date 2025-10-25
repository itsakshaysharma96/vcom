import Image from "next/image";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="w-full bg-white text-black pt-20">
			<div className="max-w-7xl mx-auto px-6">
				{/* Home Button */}
				<div className="flex justify-end mb-8">
					<button className="bg-white border-2 border-black rounded-[50px] px-8 py-4 flex items-center space-x-2 hover:bg-gray-50 transition-colors">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
						<span className="text-xl font-semibold">Home</span>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
						</svg>
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
					{/* Services */}
					<div>
						<h3 className="text-[30px] font-semibold mb-6">Services</h3>
						<div className="space-y-4 text-[20px] font-semibold leading-[1.85]">
							<Link href="/consult-design" className="block hover:text-[#6bebb3] transition-colors">
								Consult & design
							</Link>
							<Link href="/engineer-automate" className="block hover:text-[#6bebb3] transition-colors">
								Engineer & automate
							</Link>
							<Link href="/analyze-optimize" className="block hover:text-[#6bebb3] transition-colors">
								Analyze & optimize
							</Link>
						</div>
					</div>

					{/* Industries */}
					<div>
						<h3 className="text-[30px] font-semibold mb-6">Industries</h3>
						<div className="space-y-4 text-[20px] font-semibold leading-[1.85]">
							<Link href="/banking-financial" className="block hover:text-[#6bebb3] transition-colors">
								Banking & financial services
							</Link>
							<Link href="/communications" className="block hover:text-[#6bebb3] transition-colors">
								Communications
							</Link>
							<Link href="/consumer-goods" className="block hover:text-[#6bebb3] transition-colors">
								Consumer packaged goods
							</Link>
							<Link href="/healthcare" className="block hover:text-[#6bebb3] transition-colors">
								Healthcare
							</Link>
							<Link href="/life-sciences" className="block hover:text-[#6bebb3] transition-colors">
								Life Sciences
							</Link>
							<Link href="/information-services" className="block hover:text-[#6bebb3] transition-colors">
								Information services
							</Link>
							<Link href="/insurance" className="block hover:text-[#6bebb3] transition-colors">
								Insurance
							</Link>
							<Link href="/software-vendors" className="block hover:text-[#6bebb3] transition-colors">
								Independent software vendors
							</Link>
						</div>
					</div>

					{/* More Industries */}
					<div>
						<div className="space-y-4 text-[20px] font-semibold leading-[1.85] mt-[60px]">
							<Link href="/manufacturing" className="block hover:text-[#6bebb3] transition-colors">
								Manufacturing
							</Link>
							<Link href="/media-entertainment" className="block hover:text-[#6bebb3] transition-colors">
								Media & entertainment
							</Link>
							<Link href="/retail" className="block hover:text-[#6bebb3] transition-colors">
								Retail
							</Link>
							<Link href="/transport-logistics" className="block hover:text-[#6bebb3] transition-colors">
								Transport & logistics
							</Link>
							<Link href="/travel-hospitality" className="block hover:text-[#6bebb3] transition-colors">
								Travel & hospitality
							</Link>
						</div>
					</div>

					{/* Insights */}
					<div>
						<h3 className="text-[30px] font-semibold mb-6">Insights</h3>
						<div className="space-y-4 text-[20px] font-semibold leading-[1.85] mb-8">
							<Link href="/perspectives" className="block hover:text-[#6bebb3] transition-colors">
								Perspectives
							</Link>
							<Link href="/articles-resources" className="block hover:text-[#6bebb3] transition-colors">
								Articles & resources
							</Link>
						</div>

						<h3 className="text-[30px] font-semibold mb-6">Careers</h3>
						<div className="space-y-4 text-[20px] font-semibold leading-[1.85]">
							<Link href="/careers" className="block hover:text-[#6bebb3] transition-colors">
								Careers
							</Link>
							<Link href="/job-search" className="block hover:text-[#6bebb3] transition-colors">
								Job Search
							</Link>
						</div>
					</div>

					{/* About */}
					<div>
						<h3 className="text-[30px] font-semibold mb-6">About</h3>
						<div className="space-y-4 text-[20px] font-semibold leading-[1.85]">
							<Link href="/about-us" className="block hover:text-[#6bebb3] transition-colors">
								About us
							</Link>
							<Link href="/news-events" className="block hover:text-[#6bebb3] transition-colors">
								News & events
							</Link>
							<Link href="/our-partners" className="block hover:text-[#6bebb3] transition-colors">
								Our partners
							</Link>
							<Link href="/our-offices" className="block hover:text-[#6bebb3] transition-colors">
								Our offices
							</Link>
						</div>
					</div>
				</div>

				{/* Separator Line */}
				<div className="h-px bg-black my-12"></div>

				{/* Bottom Section */}
				<div className="flex flex-col md:flex-row justify-between items-start pb-8">
					{/* Left Side - Social Icons + Copyright */}
					<div className="flex flex-col items-start mb-4 md:mb-0">
						<div className="flex items-center space-x-4 mb-4">
							<Link href="https://linkedin.com" target="_blank" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
								<Image
									src="https://www.figma.com/api/mcp/asset/952b0c21-70c7-45f5-93f4-2feee8e9d28f"
									alt="LinkedIn"
									width={26}
									height={26}
									className="object-contain"
								/>
							</Link>
							<Link href="https://twitter.com" target="_blank" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
								<Image
									src="https://www.figma.com/api/mcp/asset/df408f47-e222-47ac-93c3-747c4a45a0b7"
									alt="Twitter"
									width={35}
									height={35}
									className="object-contain"
								/>
							</Link>
							<Link href="https://facebook.com" target="_blank" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
								<Image
									src="https://www.figma.com/api/mcp/asset/18fddbc5-8cd5-4796-b04d-025f715f535b"
									alt="Facebook"
									width={22}
									height={32}
									className="object-contain"
								/>
							</Link>
							<Link href="https://youtube.com" target="_blank" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
								<Image
									src="https://www.figma.com/api/mcp/asset/7e7f2a96-2963-442a-a4c1-cc6759d9a725"
									alt="YouTube"
									width={38}
									height={29}
									className="object-contain"
								/>
							</Link>
							<Link href="https://instagram.com" target="_blank" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
								<Image
									src="https://www.figma.com/api/mcp/asset/52996596-d00a-4711-9d03-b6951679b0a7"
									alt="Instagram"
									width={40}
									height={29}
									className="object-contain"
								/>
							</Link>
						</div>
						<p className="text-[15px] text-black">
							©2025 Vcom Technologies. All rights reserved.
						</p>
					</div>

					{/* Right Side - Logo + Policy Links */}
					<div className="flex flex-col items-end">
						<Image
							src="https://www.figma.com/api/mcp/asset/51eb5198-411f-44d7-8cb6-4405f7124038"
							alt="Vcom Technologies Logo"
							width={158}
							height={70}
							className="object-contain"
						/>
						<p className="text-[15px] text-black text-right">
							Privacy Policy | Cookies Policy | Terms of Use Compliance | Glossary | UK Modern Slavery Statement
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
