import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";
import Root from "./routes/root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <EmployeeList />,
			},
			{
				path: "/employee/:id",
				element: <EmployeeDetail />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
