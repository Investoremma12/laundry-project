export type ServicePrice = {
	name: string;
	price: string;
};

export const laundryPrices: ServicePrice[] = [
	{ name: 'White Up & Down', price: '₦1,000' },
	{ name: 'Ordinary Color Up & Down', price: '₦700' },
	{ name: 'White Jalamia', price: '₦1,000' },
	{ name: 'Ordinary Color Jalamia', price: '₦700' },
	{ name: 'Gowns Big / White', price: '₦1,000' },
	{ name: 'Gowns Regular', price: '₦700' },
	{ name: 'Shirts / Top', price: '₦400' },
	{ name: 'Trousers / Jeans / Joggers', price: '₦400' },
	{ name: 'Duvet Full Set', price: '₦3,000' },
	{ name: 'Only Duvet', price: '₦2,000' },
	{ name: 'Bedspread and Pillowcase', price: '₦1,000' },
];

export const ironingPrices: ServicePrice[] = [
	{ name: 'Per Cloth', price: '₦200' },
	{ name: 'Gowns', price: '₦300' },
];
