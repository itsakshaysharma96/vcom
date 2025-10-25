import type React from "react";
import type { Metadata } from "next";
import { Vollkorn, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/screen/components/header";
import { Footer } from "@/src/screen/components/footer";

const vollkorn = Vollkorn({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-vollkorn",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Vcom Technologies - IT Infrastructure & Technology Solutions",
	description:
		"Your trusted IT infrastructure partner. We design, build, and optimize technology solutions that keep your business future-ready.",
	generator: "Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${vollkorn.variable} ${inter.variable} antialiased`}
		>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
