import React from 'react'
import Table from '../../../../components/ReactTable/Table'
import { Link } from 'react-router-dom'

export default function PeminjamanList({ peminjamans, deletePeminjaman }) {
	const columns = React.useMemo(
		() => [	
			{
				Header: 'User / Peminjam',
				accessor: 'user.name'
			},
			{
				Header: 'Book',
				accessor: 'book.name'
			},
			{
				Header: 'Tanggal Pinjam',
				accessor: 'tgl_pinjam',
				disableFilters: true		
			},
			{
				Header: 'Tanggal Kembali',
				accessor: 'tgl_kembali',
				disableFilters: true		
			},
			{
				Header: 'Durasi Peminjaman',
				accessor: 'durasi_peminjaman',
				disableFilters: true,		
				Cell: ({ row }) => { 
					var tanggal_kembali = new Date(row.original.tgl_kembali) 
					var now = new Date();
					var durasi = parseInt((tanggal_kembali - now) / (1000 * 60 * 60 * 24), 10); 
					return (
						<React.Fragment>
							{durasi < 0 ?
								<p>Durasi habis / <br/> {durasi} Hari</p> :
								<p>{durasi} Hari</p>
							}
						</React.Fragment>
					)
				}
			},
			{
				Header: 'Denda',
				accessor: 'denda',
				disableFilters: true,		
				Cell: ({ row }) => {
					var tanggal_kembali = new Date(row.original.tgl_kembali) 
					var now = new Date();
					var durasi = parseInt((tanggal_kembali - now) / (1000 * 60 * 60 * 24), 10); 
					return (
						<React.Fragment>
							{durasi < 0 ?
								<p>{Math.abs(durasi) * 500 }</p> :
								<p>0</p>
							}
						</React.Fragment>
					)
				}				
			},
			{
				Header: 'Action',
				disableFilters: true,
				Cell: ({ row }) => (
					<div>
		               <Link to={`/peminjaman/${row.original.id}/edit`} className="btn btn-sm btn-primary">Edit</Link>{' '}
		               <button onClick={() => deletePeminjaman(row.original.id)} className="btn btn-sm btn-danger">Delete</button>
					</div>
				)
			}
		],
		[deletePeminjaman]
	)

	return (
		<React.Fragment>
			<Table columns={columns} data={peminjamans} />
		</React.Fragment>
	)
}