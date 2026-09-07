import { Star, Clover, Shield } from 'lucide-react';
import AboutImage from '../assets/images/about-image.png';

export default function About() {
	const aboutFeatures = [
		{
			icon: Shield,
			title: 'Trusted & Reliable',
		},
		{
			icon: Clover,
			title: 'Eco-Friendly Products',
		},
		{
			icon: Star,
			title: 'Quality Guaranteed',
		},
	];
	return (
		<section
			id="about"
			className="flex flex-col items-center justify-between bg-linear-to-b from-[#031B4E] to-[#02163D] text-white md:flex-row md:bg-none md:bg-white md:text-black"
		>
			<div className="hidden md:block md:w-[44%] md:px-4 lg:px-8 xl:px-10">
				<img
					src={AboutImage}
					alt="About Look Klean"
					className="aspect-[1.7] h-auto w-full rounded-2xl object-cover"
				/>
			</div>
			{/* Right side on desktop */}
			<div className="mx-auto w-full px-7 py-10 md:w-[56%] md:px-6 md:py-12 lg:px-10 lg:py-16 xl:px-16">
				<div className="flex items-center gap-3">
					<p className="font-poppins uppercase text-sm font-semibold tracking-[0.28em] text-[#2997FF] sm:text-base">
						About us
					</p>
					<div className="h-px w-10 bg-linear-to-r from-[#2997FF] to-[#031B4E] sm:w-14" />
				</div>
				<h2 className="mt-3 font-poppins text-3xl font-bold tracking-wide">
					Your Trusted
					<br /> Laundry Partner
				</h2>
				<p className="mt-3 max-w-2xl font-poppins text-base leading-relaxed text-white/75 sm:text-lg lg:text-[#334155]">
					Look Klean is a premium laundry service dedicated to keeping your
					clothes fresh, clean and in perfect condition. With our professional
					care, advance cleaning techniques and reliable delivery. We make
					laundry day stress-free for you.
				</p>
				<div className="flex flex-col gap-6 md:flex-row md:gap-3">
					{aboutFeatures.map((feature, index) => (
						<div
							key={index}
							className="mt-3 flex w-full items-center gap-4 rounded-xl border border-[#2997FF]/20 bg-[#2997FF]/10 px-3 py-3 md:items-start md:gap-2 md:py-2 md:bg-[#2997FF]/5 lg:py-1"
						>
							<div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#2997FF]/20 md:h-10 md:w-10 md:bg-transparent">
								<feature.icon className="h-8 w-8 text-[#2997FF] drop-shadow-[0_0_12px_rgba(0,100,254,0.7)] transition-transform duration-300 group-hover:scale-110 md:h-5 md:w-5" />
							</div>

							<p className="font-poppins text-xl font-semibold tracking-wide md:text-xs md:text-blue-900">
								{feature.title}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
