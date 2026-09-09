import { motion } from 'framer-motion';
import { ironingPrices, laundryPrices } from '../data/services';

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
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.15 }}
					transition={{ duration: 0.55, delay: 0.1 }}
					className="mt-10 grid w-full gap-5 lg:grid-cols-[1.5fr_0.8fr]"
				>
					<div className="overflow-hidden rounded-xl border border-[#1478E8]/55 bg-[#06204D]/65 sm:rounded-2xl">
						<div className="flex items-center justify-between border-b border-[#1478E8]/55 bg-[#0064FE]/80 px-4 py-3 sm:px-6">
							<h3 className="font-poppins text-base font-semibold sm:text-lg">
								Laundry &amp; Cleaning
							</h3>
							<span className="font-poppins text-xs uppercase tracking-[0.14em] text-white/70">
								Price list
							</span>
						</div>
						<div className="divide-y divide-[#2B6BB4]/35">
							{laundryPrices.map(({ name, price }) => (
								<div
									key={name}
									className="flex items-center justify-between gap-4 px-4 py-3 font-poppins text-sm sm:px-6"
								>
									<span className="text-white/85">{name}</span>
									<strong className="shrink-0 text-[#66C7FF]">{price}</strong>
								</div>
							))}
						</div>
					</div>

					<div className="overflow-hidden rounded-xl border border-[#1478E8]/55 bg-[#06204D]/65 sm:rounded-2xl">
						<div className="border-b border-[#1478E8]/55 bg-[#0064FE]/80 px-4 py-3 sm:px-6">
							<h3 className="font-poppins text-base font-semibold sm:text-lg">
								Ironing Session
							</h3>
						</div>
						<div className="divide-y divide-[#2B6BB4]/35">
							{ironingPrices.map(({ name, price }) => (
								<div
									key={name}
									className="flex items-center justify-between gap-4 px-4 py-3 font-poppins text-sm sm:px-6"
								>
									<span className="text-white/85">{name}</span>
									<strong className="shrink-0 text-[#66C7FF]">{price}</strong>
								</div>
							))}
						</div>
					</div>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.15 }}
					className="mt-6 max-w-3xl text-center font-poppins text-sm leading-relaxed text-white/70 sm:text-base"
				>
					We also provide professional house-cleaning services. Pricing is
					quoted based on the type and volume of items to be cleaned.
				</motion.p>
			</div>
		</section>
	);
}
