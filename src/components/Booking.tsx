import { useState } from 'react';
import { motion } from 'framer-motion';
import {
	ArrowRight,
	CalendarDays,
	CheckCircle2,
	Clock3,
	Mail,
	MapPin,
	ShieldCheck,
	Sparkles,
	UserRound,
} from 'lucide-react';
import { useForm } from 'react-hook-form';

const serviceOptions = [
	'Wash & Fold',
	'Ironing Service',
	'Dry Cleaning',
	'Pickup & Delivery',
];

type BookingFormValues = {
	name: string;
	email: string;
	phone: string;
	service: string;
	date: string;
	time: string;
	address: string;
};

const fieldVariants = {
	hidden: { opacity: 0, y: 14 },
	visible: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: index * 0.06, duration: 0.4 },
	}),
};

const inputClass =
	'h-12 w-full rounded-xl border border-[#2B6BB4]/50 bg-[#031B4E]/75 px-4 font-poppins text-sm text-white outline-none transition-all placeholder:text-[#A8C2E3]/60 focus:border-[#66C7FF] focus:bg-[#06265C] focus:ring-2 focus:ring-[#2997FF]/20';

function FieldError({ message }: { message?: string }) {
	return message ? (
		<p className="mt-1.5 text-xs text-[#FF9AAB]">{message}</p>
	) : null;
}

export default function Booking() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<BookingFormValues>();

	const onSubmit = () => {
		setIsSubmitted(true);
		reset();
	};

	return (
		<section id="booking" className="overflow-hidden bg-[#020F2B] text-white">
			<div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14 lg:px-12 lg:py-24 xl:px-16">
				<motion.div
					initial={{ opacity: 0, x: -24 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="max-w-lg"
				>
					<div className="flex items-center gap-3 font-poppins text-sm font-semibold tracking-[0.24em] text-[#2997FF]">
						<CalendarDays className="size-5" />
						<span>BOOK A SERVICE</span>
						<span className="h-px w-16 bg-[#2997FF]" />
					</div>
					<h2 className="mt-5 font-poppins text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
						Schedule Your{' '}
						<span className="block bg-linear-to-r from-[#2997FF] to-[#66C7FF] bg-clip-text text-transparent">
							Laundry Service
						</span>
					</h2>
					<p className="mt-5 max-w-md font-poppins text-base leading-relaxed text-[#C1D3EB] sm:text-lg">
						Choose a service and a time that works for you. We will take care of
						the rest, quickly and conveniently.
					</p>
					<div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
						{[
							{
								icon: Sparkles,
								title: 'Easy booking',
								text: 'A few clicks is all it takes.',
							},
							{
								icon: Clock3,
								title: 'Flexible times',
								text: 'Choose a time that suits you.',
							},
							{
								icon: ShieldCheck,
								title: 'Secure details',
								text: 'Your information stays private.',
							},
						].map(({ icon: Icon, title, text }) => (
							<div key={title} className="flex items-start gap-3">
								<span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#1478E8]/70 bg-[#0064FE]/15 text-[#66C7FF]">
									<Icon className="size-5" />
								</span>
								<div>
									<h3 className="font-poppins text-sm font-semibold">
										{title}
									</h3>
									<p className="mt-1 text-xs leading-relaxed text-[#A8C2E3]">
										{text}
									</p>
								</div>
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6, delay: 0.12 }}
					className="rounded-2xl border border-[#1478E8]/65 bg-[#031B4E]/80 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:p-7 lg:p-8"
				>
					{isSubmitted ? (
						<motion.div
							initial={{ opacity: 0, scale: 0.96 }}
							animate={{ opacity: 1, scale: 1 }}
							className="flex min-h-[420px] flex-col items-center justify-center text-center"
						>
							<CheckCircle2 className="size-16 text-[#66C7FF]" />
							<h3 className="mt-5 font-poppins text-2xl font-bold">
								Request received
							</h3>
							<p className="mt-3 max-w-sm text-sm leading-relaxed text-[#C1D3EB]">
								Thanks for booking with Look Klean. We will contact you shortly
								to confirm your pickup.
							</p>
							<button
								type="button"
								onClick={() => setIsSubmitted(false)}
								className="mt-7 rounded-xl border border-[#2997FF] px-5 py-3 font-poppins text-sm font-semibold text-white transition-colors hover:bg-[#0064FE]/20"
							>
								Book another service
							</button>
						</motion.div>
					) : (
						<form onSubmit={handleSubmit(onSubmit)} noValidate>
							<div className="mb-6">
								<p className="font-poppins text-lg font-semibold">
									Tell us what you need
								</p>
								<p className="mt-1 text-sm text-[#A8C2E3]">
									We will get your order moving.
								</p>
							</div>
							<div className="grid gap-4 sm:grid-cols-2">
								{[
									{
										name: 'name' as const,
										label: 'Full name',
										placeholder: 'Your name',
										icon: UserRound,
										type: 'text',
										rules: { required: 'Please enter your name.' },
									},
									{
										name: 'email' as const,
										label: 'Email address',
										placeholder: 'you@example.com',
										icon: Mail,
										type: 'email',
										rules: {
											required: 'Please enter your email.',
											pattern: {
												value: /^\S+@\S+\.\S+$/,
												message: 'Enter a valid email address.',
											},
										},
									},
								].map(
									(
										{ name, label, placeholder, icon: Icon, type, rules },
										index,
									) => (
										<motion.div
											key={name}
											custom={index}
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											variants={fieldVariants}
										>
											<label
												htmlFor={name}
												className="mb-2 block font-poppins text-xs font-medium text-[#C1D3EB]"
											>
												{label}
											</label>
											<div className="relative">
												<Icon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#66C7FF]" />
												<input
													id={name}
													type={type}
													placeholder={placeholder}
													className={`${inputClass} pl-11 ${errors[name] ? 'border-[#FF6B84]' : ''}`}
													{...register(name, rules)}
												/>
											</div>
											<FieldError message={errors[name]?.message} />
										</motion.div>
									),
								)}
								<motion.div
									custom={3}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={fieldVariants}
								>
									<label
										htmlFor="service"
										className="mb-2 block font-poppins text-xs font-medium text-[#C1D3EB]"
									>
										Service type
									</label>
									<select
										id="service"
										className={`${inputClass} ${errors.service ? 'border-[#FF6B84]' : ''}`}
										{...register('service', {
											required: 'Please choose a service.',
										})}
										defaultValue=""
									>
										<option value="" disabled>
											Select a service
										</option>
										{serviceOptions.map((service) => (
											<option key={service} value={service}>
												{service}
											</option>
										))}
									</select>
									<FieldError message={errors.service?.message} />
								</motion.div>
								<motion.div
									custom={4}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={fieldVariants}
								>
									<label
										htmlFor="date"
										className="mb-2 block font-poppins text-xs font-medium text-[#C1D3EB]"
									>
										Preferred date
									</label>
									<div className="relative">
										<CalendarDays className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#66C7FF]" />
										<input
											id="date"
											type="date"
											className={`${inputClass} pl-11 ${errors.date ? 'border-[#FF6B84]' : ''}`}
											{...register('date', {
												required: 'Please choose a date.',
											})}
										/>
									</div>
									<FieldError message={errors.date?.message} />
								</motion.div>
								<motion.div
									custom={5}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={fieldVariants}
								>
									<label
										htmlFor="time"
										className="mb-2 block font-poppins text-xs font-medium text-[#C1D3EB]"
									>
										Preferred time
									</label>
									<div className="relative">
										<Clock3 className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#66C7FF]" />
										<input
											id="time"
											type="time"
											className={`${inputClass} pl-11 ${errors.time ? 'border-[#FF6B84]' : ''}`}
											{...register('time', {
												required: 'Please choose a time.',
											})}
										/>
									</div>
									<FieldError message={errors.time?.message} />
								</motion.div>
								<motion.div
									custom={6}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={fieldVariants}
									className="sm:col-span-2"
								>
									<label
										htmlFor="address"
										className="mb-2 block font-poppins text-xs font-medium text-[#C1D3EB]"
									>
										Pickup address
									</label>
									<div className="relative">
										<MapPin className="pointer-events-none absolute left-4 top-4 size-4 text-[#66C7FF]" />
										<textarea
											id="address"
											rows={3}
											placeholder="Where should we collect your laundry?"
											className={`${inputClass} h-auto resize-none py-3 pl-11 ${errors.address ? 'border-[#FF6B84]' : ''}`}
											{...register('address', {
												required: 'Please enter your pickup address.',
											})}
										/>
									</div>
									<FieldError message={errors.address?.message} />
								</motion.div>
							</div>
							<motion.button
								whileHover={{ y: -2 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								className="mt-6 flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-[#0064FE] font-poppins text-sm font-semibold shadow-lg shadow-[#0064FE]/25 transition-colors hover:bg-[#2997FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66C7FF]"
							>
								<CalendarDays className="size-5" />
								Book My Service
								<ArrowRight className="size-5" />
							</motion.button>
							<p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-[#A8C2E3]">
								<ShieldCheck className="size-4 text-[#66C7FF]" /> Your
								information is safe and secure.
							</p>
						</form>
					)}
				</motion.div>
			</div>
		</section>
	);
}
