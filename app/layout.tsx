import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "React Web Player",
	description: "Веб плеер для React.js",
	icons: {
		icon: "/logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
