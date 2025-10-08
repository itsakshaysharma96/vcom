"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import  Accordion1 from "@/public/homepage/services/1.png"; // Replace with your actual image path
import  Accordion2 from "@/public/homepage/services/2.png"; // Replace with your actual image path
import  Accordion3 from "@/public/homepage/services/3.png"; // Replace with your actual image path
import  Accordion4 from "@/public/homepage/services/4.png"; // Replace with your actual image path
import Link from "next/link";


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
			title: "Styling & Installation",
       icon:Accordion4,
			description:
				"We style and oversee every element with precision—furniture, art, textures, and accessories—so the final space feels cohesive, refined, and truly yours.",
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
									<div className="md:w-[50%] w-0"><Image src={service?.icon} alt={`Accor${index}`} width={50} height={50} className="h-[50px] w-[50px] rounded-full p-2 bg-primary"/></div>
									<div className="flex items-center justify-start md:w-[50%] w-[100%] gap-3">
										<div className="text-[20px] md:text-[35px] font-bold text-black md:min-w-[60px] min-w-[30px]">
											{service.number}
										</div>
										<div className="flex-1">
											<h3 className=" md:text-[25px] text-[15px] md:font-normal font-semibold tracking-wider text-black">
												{service.title}
											</h3>
										</div>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="md:pl-[43rem] pl-10 md:pr-8 pb-4">
								<p className="text-black leading-relaxed md:text-xl text-base">
									{service.description}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
</div>
        <Link href="#contactUs" className=" btn-sophie md:text-lg mt-12 text-center inline-flex uppercase rounded-none md:px-12 px-6 mx-auto md:mx-0 py-4 bg-primary tracking-wider text-primary-foreground hover:bg-primary/90">
             Discuss My Project
            </Link>
			</div>
		</section>
	);
}
