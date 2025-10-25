"use client";

import { useState } from "react";

export function Services() {
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
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
						We design, Build, and Optimize IT Solutions That Keep Your Business Future-Ready.
					</h2>
					<p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
						From network foundations to cloud and cybersecurity, Vcom Technologies brings together expertise and innovation to deliver technology that works for you.
					</p>
				</div>

				{/* Service Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					<div className="bg-[#091e58] h-[330px] rounded-[52px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center">
						<h3 className="text-[40px] font-bold text-white text-center">
							Consult & design
						</h3>
					</div>
					<div className="bg-[#2e3192] h-[330px] rounded-[52px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center">
						<h3 className="text-[40px] font-bold text-white text-center">
							Engineer & automate
						</h3>
					</div>
					<div className="bg-[#59a47a] h-[330px] rounded-[52px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center">
						<h3 className="text-[40px] font-bold text-white text-center">
							Analyze & optimize
						</h3>
					</div>
				</div>

			</div>
		</section>
	);
}
