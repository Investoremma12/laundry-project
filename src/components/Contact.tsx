import { useState } from 'react';
import {
	Mail,
	MapPin,
	MessageCircle,
	Phone,
	Send,
	UserRound,
} from 'lucide-react';
import { motion } from 'framer-motion';

const contactDetails = [
	{
		icon: Phone,
		label: 'Phone',
		value: '09012275697',
		href: 'tel:09012275697',
	},
	{
		icon: Mail,
		label: 'Email',
		value: 'Lookkleanservices@gmail.com',
		href: 'mailto:Lookkleanservices@gmail.com',
	},
	{
		icon: MapPin,
		label: 'Location',
		value: 'Lagos, Nigeria',
	},
];

const reveal = {
	hidden: { opacity: 0, y: 22 },
	visible: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: index * 0.1, duration: 0.55 },
	}),
};

export default function Contact() {
	const [isSent, setIsSent] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const name = String(formData.get('name') ?? '').trim();
		const email = String(formData.get('email') ?? '').trim();
		const message = String(formData.get('message') ?? '').trim();
		const subject = `New contact message from ${name}`;
		const body = [
			`Name: ${name}`,
			`Email: ${email}`,
			'',
			'Message:',
			message,
		].join('\n');

		window.location.href = `mailto:Lookkleanservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setIsSent(true);
	};

	return (
		<section
			id="contact"
			className="relative w-full overflow-hidden border-y border-[#1B5BA0]/50 bg-[#020F2B] text-white"
		>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_65%,rgba(0,100,254,0.18),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(41,151,255,0.1),transparent_30%)]" />
			<div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-20 xl:px-16">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.25 }}
					variants={reveal}
					custom={0}
				>
					<div className="flex items-center gap-3">
						<p className="font-poppins text-sm font-semibold uppercase tracking-[0.28em] text-[#66C7FF] sm:text-base">
							Get in touch
						</p>
						<div className="h-px w-10 bg-linear-to-r from-[#2997FF] to-transparent sm:w-14" />
					</div>
					<h2 className="mt-4 font-poppins text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
						We&apos;re Here to Help
					</h2>
					<p className="mt-4 max-w-lg font-poppins text-base leading-relaxed text-[#C1D3EB] sm:text-lg">
						Have questions or need assistance? Reach out to us and we&apos;ll
						get back to you as soon as possible.
					</p>

					<div className="mt-8 space-y-5">
						{contactDetails.map(({ icon: Icon, label, value, href }, index) => {
							const content = (
								<>
									<span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#0064FE]/70 text-white shadow-[0_0_20px_rgba(0,100,254,0.25)] sm:size-11">
										<Icon className="size-5" strokeWidth={1.8} />
									</span>
									<span>
										<span className="sr-only">{label}: </span>
										{value}
									</span>
								</>
							);

							return (
								<motion.div
									key={label}
									custom={index + 1}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={reveal}
									className="font-poppins text-base sm:text-lg"
								>
									{href ? (
										<a
											href={href}
											className="flex items-center gap-4 transition-colors hover:text-[#66C7FF]"
										>
											{content}
										</a>
									) : (
										<div className="flex items-center gap-4">{content}</div>
									)}
								</motion.div>
							);
						})}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 26 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.65, delay: 0.15 }}
					className="rounded-2xl border border-[#1B5BA0]/70 bg-[#06204D]/55 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-6 lg:p-7"
				>
					{isSent ? (
						<div className="flex min-h-80 flex-col items-center justify-center text-center">
							<MessageCircle className="size-14 text-[#66C7FF]" />
							<h3 className="mt-5 font-poppins text-2xl font-bold">
								Message sent
							</h3>
							<p className="mt-2 text-sm text-[#C1D3EB]">
								Thank you. We&apos;ll get back to you soon.
							</p>
							<button
								type="button"
								onClick={() => setIsSent(false)}
								className="mt-6 font-poppins text-sm font-semibold text-[#66C7FF] hover:text-white"
							>
								Send another message
							</button>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-4">
							<label className="relative block">
								<UserRound className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#C1D3EB]" />
								<input
									type="text"
									name="name"
									required
									placeholder="Your Name"
									className="h-14 w-full rounded-xl border border-[#2B6BB4]/60 bg-[#031B4E]/75 px-12 font-poppins text-sm text-white outline-none placeholder:text-[#C1D3EB] focus:border-[#66C7FF] focus:ring-2 focus:ring-[#2997FF]/20"
								/>
							</label>
							<label className="relative block">
								<Mail className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#C1D3EB]" />
								<input
									type="email"
									name="email"
									required
									placeholder="Your Email"
									className="h-14 w-full rounded-xl border border-[#2B6BB4]/60 bg-[#031B4E]/75 px-12 font-poppins text-sm text-white outline-none placeholder:text-[#C1D3EB] focus:border-[#66C7FF] focus:ring-2 focus:ring-[#2997FF]/20"
								/>
							</label>
							<label className="relative block">
								<MessageCircle className="pointer-events-none absolute left-4 top-5 size-5 text-[#C1D3EB]" />
								<textarea
									name="message"
									required
									rows={5}
									placeholder="Your Message"
									className="w-full resize-y rounded-xl border border-[#2B6BB4]/60 bg-[#031B4E]/75 px-12 py-4 font-poppins text-sm text-white outline-none placeholder:text-[#C1D3EB] focus:border-[#66C7FF] focus:ring-2 focus:ring-[#2997FF]/20"
								/>
							</label>
							<motion.button
								whileHover={{ y: -2 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#0878FF] font-poppins text-sm font-semibold shadow-lg shadow-[#0064FE]/25 transition-colors hover:bg-[#2997FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66C7FF]"
							>
								Send Message
								<Send className="size-5" />
							</motion.button>
						</form>
					)}
				</motion.div>
			</div>
		</section>
	);
}
