import { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/users';
const Users = () => {
	const [users, setUsers] = useState([]);

	async function fetchUsers() {
		const response = await axios.get(URL);
		const result = await response.data;
		console.log(response);
		setUsers(result);
	}

	useEffect(() => {
		fetchUsers();
	}, []);

	console.log(users);

	return (
		<section className="max-container mt-20">
			<div className="flex flex-wrap mx-2 mb-8">
				{users.map((user, index) => (
					<div className="w-full md:w-1/3 1g:w-1/3 px-2 mb-4" key={index}>
						<Card user={user} index={index} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Users;
