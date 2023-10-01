import NavbarItem from './NavbarItem';

export default function Navbar() {
	return (
		<div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
			<NavbarItem title='트랜드' param='fetchTrending' />
			<NavbarItem title='최고평점' param='fetchTopRated' />
		</div>
	);
}
