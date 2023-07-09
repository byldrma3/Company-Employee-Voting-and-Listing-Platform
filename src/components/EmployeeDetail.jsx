import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_EMPLOYEE = gql`
	query GetEmployee($id: ID!) {
		employee(id: $id) {
			id
			firstName
			lastName
			image
			votes
			email
			phone
			address
		}
	}
`;

const EmployeeDetail = () => {
	const { id } = useParams();

	const { loading, error, data } = useQuery(GET_EMPLOYEE, {
		variables: { id },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const employee = data.employee;

	return (
		<div className='employee-card employee-detail-container'>
			<h1>Employee Detail</h1>
			<div className='employee-img'>
				<img src={employee.image} alt='Employee' />
			</div>
			<div className='employee-info'>
				<p>
					<span>Name:</span> {employee.firstName} {employee.lastName}
				</p>
				<p>
					<span>Votes:</span> {employee.votes}
				</p>
				<p>
					<span>Email:</span> {employee.email}
				</p>
				<p>
					<span>Phone:</span> {employee.phone}
				</p>
				<p>
					<span>Address:</span> {employee.address}
				</p>
			</div>
		</div>
	);
};

export default EmployeeDetail;
