import { useEffect, useState } from 'react';
import { Menu, Phone, Sparkles, X } from 'lucide-react';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (!isMenuOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setIsMenuOpen(false);
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isMenuOpen]);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<nav className="relative z-10 border-b border-[#1478E8]/70 bg-[#020F2B]/95 text-white backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
				<a
					href="#home"
					className="flex shrink-0 items-center gap-3"
					aria-label="Look Klean home"
				>
					<span className="grid size-10 place-items-center rounded-lg border border-[#2997FF] bg-[#0064FE]/15 text-[#2997FF] shadow-[0_0_18px_rgba(0,100,254,0.25)]">
						<Sparkles className="size-5" strokeWidth={2.25} />
					</span>
					<span className="flex flex-col leading-none">
						<span className="font-poppins text-xl font-extrabold tracking-tight">
							Look Klean
						</span>
						<span className="mt-1 font-poppins text-[10px] font-medium tracking-[0.08em] text-[#8DB9E8]">
							LAUNDRY SERVICES
						</span>
					</span>
				</a>

				<div className="hidden items-center gap-9 md:flex">
					<a
						href="#home"
						className="border-b-2 border-[#2997FF] py-6 font-poppins text-sm font-medium text-white"
					>
						Home
					</a>
					<a
						href="#about"
						className="font-poppins text-sm font-medium text-white/90 transition-colors hover:text-[#66C7FF]"
					>
						About
					</a>
					<a
						href="#services"
						className="font-poppins text-sm font-medium text-white/90 transition-colors hover:text-[#66C7FF]"
					>
						Services
					</a>
					<a
						href="#booking"
						className="font-poppins text-sm font-medium text-white/90 transition-colors hover:text-[#66C7FF]"
					>
						Booking
					</a>
					<a
						href="#contact"
						className="font-poppins text-sm font-medium text-white/90 transition-colors hover:text-[#66C7FF]"
					>
						Contact
					</a>
				</div>

				<a
					href="#booking"
					className="hidden items-center gap-2 rounded-xl bg-[#0064FE] px-5 py-2.5 font-poppins text-sm font-semibold shadow-lg shadow-[#0064FE]/25 transition-colors hover:bg-[#2997FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66C7FF] md:flex"
				>
					<Phone className="size-3.5" />
					Book Now
				</a>

				<button
					type="button"
					className="grid size-10 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:border-[#66C7FF] hover:text-[#66C7FF] md:hidden"
					onClick={() => setIsMenuOpen((open) => !open)}
					aria-expanded={isMenuOpen}
					aria-controls="mobile-navigation"
					aria-label={
						isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
					}
				>
					{isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
				</button>
			</div>

			<div
				id="mobile-navigation"
				className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-white/10 bg-[#020F2B] px-5 pb-5 pt-3 md:hidden`}
			>
				<div className="flex flex-col gap-1">
					<a
						href="#home"
						onClick={closeMenu}
						className="rounded-lg px-3 py-3 font-poppins text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-[#66C7FF]"
					>
						Home
					</a>
					<a
						href="#about"
						onClick={closeMenu}
						className="rounded-lg px-3 py-3 font-poppins text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-[#66C7FF]"
					>
						About
					</a>
					<a
						href="#services"
						onClick={closeMenu}
						className="rounded-lg px-3 py-3 font-poppins text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-[#66C7FF]"
					>
						Services
					</a>
					<a
						href="#booking"
						onClick={closeMenu}
						className="rounded-lg px-3 py-3 font-poppins text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-[#66C7FF]"
					>
						Booking
					</a>
					<a
						href="#contact"
						onClick={closeMenu}
						className="rounded-lg px-3 py-3 font-poppins text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-[#66C7FF]"
					>
						Contact
					</a>
					<a
						href="#booking"
						onClick={closeMenu}
						className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0064FE] px-5 py-3 font-poppins text-sm font-semibold shadow-lg shadow-[#0064FE]/25 transition-colors hover:bg-[#2997FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66C7FF]"
					>
						<Phone className="size-3.5" />
						Book Now
					</a>
				</div>
			</div>
		</nav>
	);
}
