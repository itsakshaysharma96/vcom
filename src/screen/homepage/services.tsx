"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import  Accordion1 from "@/public/homepage/services/Accordian1.svg"; // Replace with your actual image path
import  Accordion2 from "@/public/homepage/services/accordian2.svg"; // Replace with your actual image path
import  Accordion3 from "@/public/homepage/services/Accordian3.svg"; // Replace with your actual image path
import  Accordion4 from "@/public/homepage/services/Accordian4.svg"; // Replace with your actual image path
import { Button } from "@/components/ui/button";


export function Services() {
	const services = [
		{
			number: "01",
			title: "Interior Architecture & Design",
      icon:Accordion1,
			description:
				"Complete space planning and architectural interior solutions tailored to your lifestyle and functional needs. We create cohesive environments that seamlessly blend form and function.",
		},
		{
			number: "02",
			title: "FF&E Design & Styling",
       icon:Accordion2,
			description:
				"Curated selection of furniture, fixtures, and equipment that reflects your personal style. From custom pieces to carefully sourced vintage finds, every element is chosen with intention.",
		},
		{
			number: "03",
			title: "Procurement & Sourcing",
       icon:Accordion3,
			description:
				"Global network of artisans, manufacturers, and suppliers ensures access to unique materials and furnishings. We handle all logistics from sourcing to delivery.",
		},
		{
			number: "04",
			title: "Turnkey Installation",
       icon:Accordion4,
			description:
				"Comprehensive project management from initial concept through final installation. Our experienced team coordinates all trades and ensures flawless execution.",
		},
	];

	return (
		<section id="services" className="w-full px-6 py-16 bg-white">
			<div className="max-w-7xl mx-auto">
				<h2 className="font-serif text-2xl lg:text-4xl font-medium text-black tracking-widest mb-12 text-center mt-10">
					HOW WE CAN HELP YOU
				</h2>
<div className="border-y border-black ">
				<Accordion type="single" collapsible className="w-full space-y-4 mt-0">
					{services.map((service, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="border-b border-black m-0">

							<AccordionTrigger className="flex items-center gap-6 hover:no-underline text-left py-3 m-0">
								<div className="flex justify-between items-center w-full">
									<div className="md:w-[50%]"><Image src={service?.icon} alt={`Accor${index}`} width={50} height={50}/></div>
									<div className="flex items-center justify-start w-[50%] gap-3">
										<div className="text-[20px] md:text-[35px] font-bold text-black min-w-[60px]">
											{service.number}
										</div>
										<div className="flex-1">
											<h3 className=" md:text-[25px] font-normal tracking-wider text-black">
												{service.title}
											</h3>
										</div>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="pl-[43rem] pr-8 pb-4">
								<p className="text-black leading-relaxed text-xl">
									{service.description}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
</div>
        <Button variant="outline" className="text-lg mt-12 text-center flex rounded-none md:px-12 tracking-wider py-6 bg-primary text-primary-foreground hover:bg-primary/90
               before:w-[2rem] before:border-[.5px] before:border-primary-foreground
               after:w-[2rem] after:border-[.5px] after:border-primary-foreground uppercase">
             Discuss My Project
            </Button>
			</div>
		</section>
	);
}
