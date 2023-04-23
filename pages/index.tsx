import AboutSection from "@/components/sections/AboutSection";
import MainSection from "@/components/sections/MainSection";

export default function Home() {
	return (
		<div className="w-full bg-white flex flex-col">
			{/* Navbar */}

			{/* Main section */}
			<MainSection />

			{/* About me section */}
			<AboutSection />

			{/* Other */}
			{/*<div>other sections</div>*/}
		</div>
	)
}
