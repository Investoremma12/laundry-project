import washIcon from '../assets/icons/wash-icon.png';
import ironIcon from '../assets/icons/iron-icon.png';
import { ArrowRight, Shirt, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
	{
		title: 'Wash & Fold',
		description: 'Your clothes washed, dried and neatly folded.',
		icon: washIcon,
		iconAlt: 'Washing machine',
	},
	{
		title: 'Ironing Service',
		description: 'Crisp, clean and perfectly pressed.',
		icon: ironIcon,
		iconAlt: 'Clothes iron',
	},
	{
		title: 'Dry Cleaning',
		description: 'Special care for delicate and premium fabrics.',
		icon: Shirt,
		iconAlt: 'Hanging shirt',
	},
	{
		title: 'Pickup & Delivery',
		description: 'We collect and deliver at your convenience.',
		icon: Truck,
		iconAlt: 'Delivery truck',
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 22 },
	visible: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index * 0.1,
			duration: 0.55,
			ease: [0.22, 1, 0.36, 1] as const,
		},
	}),
};

export default function Services() {
	return (
		<section
			id="services"
			className="w-full overflow-hidden bg-linear-to-b from-[#031B4E] to-[#02163D] text-white"
		>
			<div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
					className="flex flex-col items-center gap-3 text-center"
				>
					<div className="flex items-center justify-center gap-3">
						<div className="h-px w-10 bg-[#2997FF] sm:w-14" />
						<p className="font-poppins text-sm font-semibold tracking-[0.28em] text-[#2997FF] sm:text-base">
							OUR SERVICES
						</p>
						<div className="h-px w-10 bg-[#2997FF] sm:w-14" />
					</div>
					<h2 className="font-poppins text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
						What We Offer
					</h2>
					<p className="max-w-2xl font-poppins text-base leading-relaxed text-white/75 sm:text-lg">
						High-quality laundry and dry cleaning services tailored to your
						needs.
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.15 }}
					className="mt-10 grid w-full grid-cols-2 gap-2.5 sm:mt-12 sm:gap-4 lg:grid-cols-4 lg:gap-5"
				>
					{services.map(
						({ title, description, icon: Icon, iconAlt }, index) => {
							const isImageIcon = typeof Icon === 'string';

							return (
								<motion.a
									key={title}
									href="#booking"
									custom={index}
									variants={cardVariants}
									whileHover={{ y: -6, borderColor: 'rgba(41, 151, 255, 0.9)' }}
									whileTap={{ scale: 0.98 }}
									className="group flex min-h-56 flex-col items-center rounded-xl border border-[#1478E8]/55 bg-[#06204D]/65 px-2.5 py-5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:bg-[#08275B]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66C7FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#031B4E] sm:min-h-64 sm:rounded-2xl sm:px-5 sm:py-6"
								>
									<span className="flex h-16 items-center justify-center sm:h-20">
										{isImageIcon ? (
											<img
												src={Icon}
												alt={iconAlt}
												className="h-14 w-14 object-contain drop-shadow-[0_0_12px_rgba(0,100,254,0.7)] sm:h-16 sm:w-16"
											/>
										) : (
											<Icon
												aria-label={iconAlt}
												className="h-14 w-14 text-[#2997FF] drop-shadow-[0_0_12px_rgba(0,100,254,0.7)] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
												strokeWidth={1.7}
											/>
										)}
									</span>
									<h3 className="font-poppins text-[15px] font-semibold leading-tight sm:text-lg lg:text-xl">
										{title}
									</h3>
									<p className="mt-2 max-w-52 font-poppins text-xs leading-relaxed text-white/75 sm:mt-3 sm:text-sm lg:text-base">
										{description}
									</p>
									<ArrowRight
										className="mt-auto font-bold pt-3 text-white transition-transform duration-300 group-hover:translate-x-1 sm:pt-4"
										size={30}
									/>
								</motion.a>
							);
						},
					)}
				</motion.div>
			</div>
		</section>
	);
}
