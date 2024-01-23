import HomeInstallation from "@/components/Home/HomeInstallation";
import HomePlayerExample from "@/components/Home/HomePlayerExample";
import HomePromo from "@/components/Home/HomePromo";
import Footer from "@/components/shared/Footer";

export default function Home() {
	return (
		<main className='container pt-[96px] max-lg:px-8'>
			<HomePromo />
			<div className='mt-12'>
				<HomeInstallation />
				<HomePlayerExample />
				<Footer />
			</div>
		</main>
	);
}
