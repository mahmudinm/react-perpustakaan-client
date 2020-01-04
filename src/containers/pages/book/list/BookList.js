import React from 'react'
import Table from '../../../../components/ReactTable/Table'
import { Link } from 'react-router-dom'

export default function BookList({ books, deleteBook }) {
	const columns = React.useMemo(
		() => [	
			{
				Header: 'Name',
				accessor: 'name',
				sortType: 'basic'
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
		               <Link to={`/book/${row.original.id}/edit`} className="btn btn-sm btn-primary">Edit</Link>{' '}
		               <button onClick={() => deleteBook(row.original.id)} className="btn btn-sm btn-danger">Delete</button>
					</div>
				)
			}
		],
		[deleteBook]
	)

	return (
		<React.Fragment>
			<Table columns={columns} data={books} />
		</React.Fragment>
	)
}