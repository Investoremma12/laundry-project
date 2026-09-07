import { motion } from 'framer-motion';
import {
	Award,
	Calendar,
	Clock,
	Leaf,
	Play,
	Shield,
	Shirt,
	Smile,
} from 'lucide-react';
import BgImage from '../assets/images/hero-bg-image.png';

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: (delay: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
	}),
};

const staggerContainer = {
	hidden: {},
	show: (delay: number = 0) => ({
		transition: { staggerChildren: 0.12, delayChildren: delay },
	}),
};

const staggerItem = {
	hidden: { opacity: 0, y: 16 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
	},
};

const features = [
	{
		icon: Shield,
		title: 'Reliable & Trusted',
		description:
			'We ensure your clothes are in safe hands with top-quality care.',
	},
	{
		icon: Leaf,
		title: 'Eco-Friendly',
		description:
			'We use eco-friendly products that are safe for you and the environment.',
	},
	{
		icon: Clock,
		title: 'Fast & Convenient',
		description: 'Quick pickup and delivery right at your doorstep.',
	},
];

const stats = [
	{ icon: Smile, value: '10K+', label: 'Happy Customers' },
	{ icon: Shirt, value: '50K+', label: 'Loads Cleaned' },
	{ icon: Award, value: '99%', label: 'Satisfaction Rate' },
];

export default function Hero() {
	return (
		<section
			className="relative min-h-screen w-full overflow-hidden bg-[#031B4E] bg-cover bg-center bg-no-repeat text-white"
			style={{ backgroundImage: `url(${BgImage})` }}
		>
			{/* Darkening overlay so text stays readable on mobile where the card is hidden */}
			<div className="absolute inset-0 bg-linear-to-b from-[#031B4E]/95 via-[#031B4E]/70 to-[#031B4E]/95 sm:bg-gradient-to-r sm:from-[#031B4E]/95 sm:via-[#031B4E]/50 sm:to-[#031B4E]/10" />

			<div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-12 px-5 py-16 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-12 xl:px-16">
				{/* left side of the hero page */}
				<div className="w-full max-w-2xl lg:max-w-142.5">
					<motion.div
						initial="hidden"
						animate="show"
						custom={0}
						variants={fadeUp}
						className="mb-6 font-poppins text-sm font-medium uppercase leading-[1.2] tracking-[0.32em] text-[#2997FF] sm:mb-4"
					>
						CLEANER . FRESHER . BETTER
					</motion.div>

					<motion.h1
						initial="hidden"
						animate="show"
						custom={0.1}
						variants={fadeUp}
						className="max-w-150 text-left font-poppins text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl"
					>
						Professional{' '}
						<span className="bg-linear-to-r from-[#2997FF] to-[#66C7FF] bg-clip-text text-transparent">
							Laundry Service
						</span>
					</motion.h1>

					<motion.p
						initial="hidden"
						animate="show"
						custom={0.2}
						variants={fadeUp}
						className="mt-6 max-w-xl text-left font-poppins text-lg font-normal leading-[1.45] tracking-normal text-[#F0F0F0] sm:mt-4 sm:text-lg"
					>
						We take care of your laundry so you can focus on what truly matters.
						Fresh, clean and perfectly cared for clothes — every time.
					</motion.p>

					<motion.div
						initial="hidden"
						animate="show"
						custom={0.3}
						variants={fadeUp}
						className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
					>
						<motion.button
							whileHover={{ y: -2 }}
							whileTap={{ y: 0, scale: 0.98 }}
							className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0064FE] px-6 py-3.5 font-poppins text-lg font-medium text-white shadow-lg shadow-[#0064FE]/25 transition-colors duration-200 hover:bg-[#2997FF] hover:shadow-xl hover:shadow-[#2997FF]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66C7FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#031B4E] sm:w-auto sm:text-sm"
						>
							<Calendar className="h-4 w-4" />
							Book a Pickup
						</motion.button>

						<motion.button
							whileHover={{ y: -2 }}
							whileTap={{ y: 0, scale: 0.98 }}
							className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#0064FE] bg-transparent px-6 py-3.5 font-poppins text-lg font-medium text-white shadow-md shadow-[#0064FE]/10 transition-colors duration-200 hover:border-[#66C7FF] hover:bg-[#0064FE]/20 hover:shadow-lg hover:shadow-[#0064FE]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66C7FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#031B4E] sm:w-auto sm:text-sm"
						>
							<Play className="h-4 w-4" />
							Learn More
						</motion.button>
					</motion.div>

					{/* Stats row */}
					<motion.div
						initial="hidden"
						animate="show"
						custom={0.5}
						variants={staggerContainer}
						className="mt-12 grid grid-cols-3 gap-6 sm:max-w-lg"
					>
						{stats.map(({ icon: Icon, value, label }) => (
							<motion.div
								key={label}
								variants={staggerItem}
								whileHover={{ y: -3 }}
								className="flex flex-col items-start gap-2"
							>
								<span className="grid size-11 place-items-center rounded-full border border-[#0064FE]/60 bg-[#0064FE]/15 text-[#2997FF]">
									<Icon className="h-5 w-5" />
								</span>
								<span className="font-poppins text-2xl font-bold leading-none text-white">
									{value}
								</span>
								<span className="text-sm leading-tight text-[#F0F0F0]/70">
									{label}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Right side of the hero page — feature highlight card, desktop/tablet only */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
					className="w-full max-w-md rounded-2xl border border-[#0064FE]/60 bg-[#03204D]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm lg:max-w-[340px] xl:w-fit"
				>
					{features.map(({ icon: Icon, title, description }, index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: 0.4 + index * 0.12,
								ease: [0.22, 1, 0.36, 1],
							}}
							whileHover={{ x: 4 }}
							className={`flex items-start gap-4 py-4 ${
								index !== features.length - 1
									? 'border-b border-[#0064FE]/20'
									: ''
							} ${index === 0 ? 'pt-0' : ''} ${
								index === features.length - 1 ? 'pb-0' : ''
							}`}
						>
							<span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#0064FE]">
								<Icon className="h-5 w-5 text-white" />
							</span>
							<div>
								<h3 className="font-poppins text-base font-semibold leading-tight text-white">
									{title}
								</h3>
								<p className="mt-1 text-sm leading-snug text-[#F0F0F0]/70">
									{description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

// {
// 	/* <motion.div
// 					initial={{ opacity: 0, y: 32, scale: 0.97 }}
// 					animate={{ opacity: 1, y: 0, scale: 1 }}
// 					transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
// 					className="hidden w-full max-w-md rounded-2xl border border-[#0064FE]/60 bg-[#03204D]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm sm:block lg:max-w-[340px] xl:w-fit"
// 				>
// 					<div className="mb-5 flex items-center gap-3">
// 						<span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#0064FE] bg-[#0064FE]/10">
// 							<Clock className="h-5 w-5 text-[#2997FF]" />
// 						</span>
// 						<div>
// 							<h3 className="font-poppins text-lg font-semibold leading-tight">
// 								Book Your Laundry
// 							</h3>
// 							<p className="text-sm text-[#F0F0F0]/70">
// 								Fast . Easy . Reliable
// 							</p>
// 						</div>
// 					</div>

// 					<div className="flex flex-col gap-3">
// 						<div className="relative">
// 							<User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2997FF]" />
// 							<select
// 								defaultValue=""
// 								className="h-11 w-full appearance-none rounded-full border border-[#0064FE]/50 bg-[#031B4E]/60 pl-10 pr-10 text-sm text-white outline-none transition-colors focus:border-[#66C7FF]"
// 							>
// 								<option value="" disabled className="text-[#031B4E]">
// 									Select Service
// 								</option>
// 								<option value="wash-fold" className="text-[#031B4E]">
// 									Wash &amp; Fold
// 								</option>
// 								<option value="dry-clean" className="text-[#031B4E]">
// 									Dry Cleaning
// 								</option>
// 								<option value="iron-only" className="text-[#031B4E]">
// 									Iron Only
// 								</option>
// 							</select>
// 							<ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2997FF]" />
// 						</div>

// 						<div className="relative">
// 							<Calendar className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2997FF]" />
// 							<input
// 								type="date"
// 								aria-label="Pick-up date"
// 								className="h-11 w-full rounded-full border border-[#0064FE]/50 bg-[#031B4E]/60 pl-10 pr-4 text-sm text-white outline-none transition-colors [color-scheme:dark] focus:border-[#66C7FF]"
// 							/>
// 						</div>

// 						<div className="relative">
// 							<Clock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2997FF]" />
// 							<input
// 								type="time"
// 								aria-label="Pick-up time"
// 								className="h-11 w-full rounded-full border border-[#0064FE]/50 bg-[#031B4E]/60 pl-10 pr-4 text-sm text-white outline-none transition-colors [color-scheme:dark] focus:border-[#66C7FF]"
// 							/>
// 						</div>

// 						<div className="relative">
// 							<MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2997FF]" />
// 							<input
// 								type="text"
// 								placeholder="Your Address"
// 								className="h-11 w-full rounded-full border border-[#0064FE]/50 bg-[#031B4E]/60 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-white/50 focus:border-[#66C7FF]"
// 							/>
// 						</div>
// 					</div>

// 					<motion.button
// 						whileHover={{ y: -2 }}
// 						whileTap={{ y: 0, scale: 0.98 }}
// 						className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#0064FE] px-4 py-3.5 font-poppins text-sm font-medium text-white shadow-lg shadow-[#0064FE]/25 transition-colors duration-200 hover:bg-[#2997FF] hover:shadow-xl hover:shadow-[#2997FF]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66C7FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#03204D]"
// 					>
// 						Book Now
// 						<ChevronRight className="h-4 w-4" />
// 					</motion.button>
// 				</motion.div> */
// }
