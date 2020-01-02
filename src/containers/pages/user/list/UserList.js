import React from 'react'
import Table from '../../../../components/ReactTable/Table'
import { Link } from 'react-router-dom'

export default function UserList({ users, deleteUser }) {
	const columns = React.useMemo(
		() => [	
			{
				Header: 'Name',
				accessor: 'name'
			},
			{
				Header: 'Email',
				accessor: 'email'
			},
			{
				Header: 'Action',
				disableFilters: true,
				Cell: ({row}) => (
					<div>
		               <Link to={`/user/${row.original.id}/edit`} className="btn btn-sm btn-primary">Edit</Link>{' '}
		               <button onClick={() => deleteUser(row.original.id)} className="btn btn-sm btn-danger">Delete</button>
					</div>
				)
			}
		],
		[deleteUser]
	)

	return (
		<React.Fragment>
			<Table columns={columns} data={users} />
		</React.Fragment>
	)
}