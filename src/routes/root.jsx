import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<main className='container'>
			<Outlet />
		</main>
	);
}
