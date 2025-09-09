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
				"Complete space planning and tailored interior solutions that seamlessly balance form and function, creating cohesive environments designed around your lifestyle and needs.",
		},
		{
			number: "02",
			title: "FF&E Design",
       icon:Accordion2,
			description:
				"Bespoke furniture, finishes, and accessories thoughtfully curated to reflect your aesthetic, adding depth, character, and timeless elegance to every space.",
		},
		{
			number: "03",
			title: "Procurement",
       icon:Accordion3,
			description:
				"End-to-end sourcing of premium materials, furnishings, and décor from trusted global partners, managed with precision to ensure quality, timeliness, and alignment with your design vision.",
		},
		{
			number: "04",
			title: "Delivery & Installation",
       icon:Accordion4,
			description:
				"Meticulous delivery and expert installation of every element, from architectural features to final touches, leaving your home perfectly styled and ready to live in.",
		},
	];

	return (
		<section id="services" className="w-full px-6 md:py-16 py-10 bg-white">
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
									<div className="md:w-[50%] w-0"><Image src={service?.icon} alt={`Accor${index}`} width={50} height={50}/></div>
									<div className="flex items-center justify-start md:w-[50%] w-[100%] gap-3">
										<div className="text-[20px] md:text-[35px] font-bold text-black md:min-w-[60px] min-w-[30px]">
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
							<AccordionContent className="md:pl-[43rem] pr-8 pb-4">
								<p className="text-black leading-relaxed md:text-xl text-base">
									{service.description}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
</div>
        <Button variant="outline" className="btn-sophie md:text-lg mt-12 text-center flex uppercase rounded-none md:px-12 px-6 mx-auto md:mx-0 py-6 bg-primary tracking-wider text-primary-foreground hover:bg-primary/90">
             Discuss My Project
            </Button>
			</div>
		</section>
	);
}
