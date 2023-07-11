import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/reducers";

const GET_EMPLOYEES = gql`
	query GetEmployees {
		employees {
			id
			firstName
			lastName
			image
			votes
		}
	}
`;

const EmployeeList = () => {
	const dispatch = useDispatch();
	const employees = useSelector((state) => state.voteEmployee.employees);
	const { loading, error, data } = useQuery(GET_EMPLOYEES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;

	const employee = [...data.employees];
	employee.sort((a, b) => b.votes - a.votes);

	const handleVote = (employee) => {
		dispatch(increment(employee));
	};

	const handleUnvote = (employee) => {
		dispatch(decrement(employee));
	};

	return (
		<div className='employee-list'>
			<h1>Employee List</h1>
			<ul>
				{employee.map((employee) => (
					<li key={employee.id} className='employee-card'>
						<Link to={`/employee/${employee.id}`}>
							<div className='employee-img'>
								<img src={employee.image} alt='Employee' />
							</div>
							<p>
								{employee.firstName} {employee.lastName} ({employee.votes})
							</p>
						</Link>
						<div className='button-group'>
							<button onClick={() => handleVote(employee)} className='btn' disabled={employees.find((emp) => emp.id === employee.id)?.votes >= 1}>
								Vote
							</button>
							{employees.find((emp) => emp.id === employee.id)?.votes >= 1 && (
								<button onClick={() => handleUnvote(employee)} className='btn danger'>
									Upvote
								</button>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EmployeeList;
