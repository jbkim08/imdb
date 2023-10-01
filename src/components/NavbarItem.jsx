'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
	const searchParams = useSearchParams();
	const gernre = searchParams.get('genre');
	return (
		<div>
			<Link
				className={`m-4 hover:text-amber-600 font-semibold p2 ${
					gernre === param
						? 'underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg'
						: ''
				}`}
				href={`/?genre=${param}`}
			>
				{title}
			</Link>
		</div>
	);
}
