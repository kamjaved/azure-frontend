const Card = ({ user, index }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-xl flex justify-between bg-slate-50 hover:shadow-2xl hover:cursor-pointer mb-3t">
			<img
				className="w-28 h-28 rounded-full my-auto m-3"
				src={`https://i.pravatar.cc/300?img=${index}`}
				alt="Sunset in the mountains"
			/>

			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{user.name}</div>
				<p className="text-gray-700 text-base">
					Currently Working on <strong>{user.company.name}</strong>.and
					Living Near
					<strong>{user.address.city}</strong>
				</p>

				<span className="mt-3 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					{user.email}
				</span>
			</div>
		</div>
	);
};

export default Card;
