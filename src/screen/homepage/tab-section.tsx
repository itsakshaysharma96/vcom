"use client";

import { useState } from "react";

export function TabSection() {
	const [activeTab, setActiveTab] = useState(2); // Default to Cybersecurity tab

	const services = [
		{
			title: "Network Solutions",
			description: "Comprehensive network infrastructure design and implementation for optimal connectivity and performance.",
			features: [
				"Network Design & Architecture",
				"Infrastructure Implementation",
				"Performance Optimization",
				"Network Security Integration"
			],
			cta: "Explore Network Solutions"
		},
		{
			title: "Data Center & Cloud",
			description: "Scalable cloud solutions and data center management to support your business growth and digital transformation.",
			features: [
				"Cloud Migration & Strategy",
				"Data Center Management",
				"Hybrid Cloud Solutions",
				"Disaster Recovery Planning"
			],
			cta: "Discover Cloud Solutions"
		},
		{
			title: "Cybersecurity",
			description: "Proactive defense against threats with enterprise-grade security solutions.",
			features: [
				"Security Assessments & Audits",
				"Threat Detection & Response",
				"Governance, Risk & Compliance",
				"Endpoint & Perimeter Security"
			],
			cta: "Secure Your Business"
		},
		{
			title: "Workplace & Collaboration",
			description: "Modern workplace solutions that enhance productivity and collaboration across your organization.",
			features: [
				"Digital Workplace Setup",
				"Collaboration Tools Integration",
				"Remote Work Solutions",
				"Productivity Optimization"
			],
			cta: "Transform Your Workplace"
		},
		{
			title: "Physical Security",
			description: "Integrated physical security systems to protect your assets and ensure business continuity.",
			features: [
				"Access Control Systems",
				"Surveillance & Monitoring",
				"Intrusion Detection",
				"Emergency Response Systems"
			],
			cta: "Secure Your Premises"
		},
		{
			title: "Managed Services",
			description: "End-to-end IT management services to keep your systems running smoothly and efficiently.",
			features: [
				"24/7 System Monitoring",
				"Proactive Maintenance",
				"Help Desk Support",
				"Performance Optimization"
			],
			cta: "Get Managed Support"
		}
	];

	return (
		<section id="services" className="w-full py-16 bg-white">
			<div className="max-w-7xl mx-auto px-6">

				{/* Services Navigation */}
				<div className="relative mb-16">
					<div className="bg-[rgba(9,30,88,0.89)] rounded-[70px] h-[139px] flex items-center justify-center relative overflow-x-auto">
						<div className="flex items-center justify-center space-x-4 md:space-x-8 text-white px-4">
							{services.map((service, index) => (
								<button
									key={service.title}
									onClick={() => setActiveTab(index)}
									className={`px-4 md:px-8 py-4 rounded-[70px] transition-all duration-300 whitespace-nowrap ${
										activeTab === index
											? 'bg-white text-black font-semibold'
											: 'text-white hover:bg-white/10'
									}`}
								>
									<span className="text-sm md:text-lg font-semibold">
										{service.title}
									</span>
								</button>
							))}
						</div>
					</div>
				</div>


				{/* Service Details */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<h3 className="text-4xl md:text-5xl font-bold text-black">
							{services[activeTab].title === "Cybersecurity"
								? "Protect What Matters Most, End to End."
								: `Transform Your ${services[activeTab].title.split(' ')[0]} Infrastructure`
							}
						</h3>
						<p className="text-lg text-gray-700 leading-relaxed">
							{services[activeTab].description}
						</p>
						<div className="space-y-4">
							{services[activeTab].features.map((feature, index) => (
								<div key={index} className="flex items-start space-x-4">
									<div className="w-2 h-2 bg-[#6bebb3] rounded-full mt-3 flex-shrink-0"></div>
									<span className="text-xl text-black">{feature}</span>
								</div>
							))}
						</div>
						<div className="flex space-x-4">
							<button className="bg-[#6bebb3] text-black px-8 py-3 rounded-[50px] font-semibold hover:bg-[#5dd1a0] transition-colors">
								{services[activeTab].cta}
							</button>
						</div>
					</div>
					<div className="relative">
						<div className="bg-[#eeebeb] rounded-[51px] h-[559px] w-full relative overflow-hidden">
							<div className="absolute top-0 left-0 right-0 h-[122px] bg-gradient-to-b from-[#2e3192] to-[#6bebb3] rounded-t-[51px] flex items-center justify-center">
								<h4 className="text-white text-xl md:text-2xl font-semibold">
									{services[activeTab].title}
								</h4>
							</div>
							<div className="absolute bottom-4 right-4 flex space-x-4">
								<button className="bg-[#6bebb3] text-black px-6 py-3 rounded-[50px] text-sm font-semibold hover:bg-[#5dd1a0] transition-colors">
									Contact
								</button>
								<button className="bg-[#6bebb3] text-black px-6 py-3 rounded-[50px] text-sm font-semibold hover:bg-[#5dd1a0] transition-colors">
									Demo
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
