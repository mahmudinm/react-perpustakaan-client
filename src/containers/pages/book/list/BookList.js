import React from 'react'
import Table from '../../../../components/ReactTable/Table'
import { Link } from 'react-router-dom'

export default function BookList({ books, onClick }) {
	const columns = React.useMemo(
		() => [	
			{
				Header: 'Name',
				accessor: 'name'
			},
			{
				Header: 'Description',
				accessor: 'description'
			},
			{
				Header: 'Penerbit',
				accessor: 'penerbit'
			},
			{
				Header: 'Stock',
				accessor: 'stock'
			},
			{
				Header: 'Action',
				disableFilters: true,
				Cell: ({row}) => (
					<div>
		               <Link to={`/books/${row.original.id}/edit`} className="btn btn-sm btn-primary">Edit</Link>{' '}
		               {/*<button onClick={() => onClick(row)} className="btn btn-sm btn-danger">Delete</button>*/}
					</div>
				)
			}
		],
		[onClick]
	)

	return (
		<React.Fragment>
			<Table columns={columns} data={books} />
		</React.Fragment>
	)
}