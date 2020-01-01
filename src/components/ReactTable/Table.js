import React from 'react'
import { useTable, useGlobalFilter, usePagination,  useFilters } from 'react-table'
// import matchSorter from 'match-sorter'

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length

  return (
    <div className="form-group row">
      <label className="col-sm-2 col-form-label">Search</label>
      <div className="col-sm-10">
	      <input
	        value={globalFilter || ''}
	        onChange={e => {
	          setGlobalFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
	        }}
	        className="form-control"
	        placeholder={`${count} records...`}
	      />
      </div>
    </div>	    
  )
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      className="form-control"
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

// function fuzzyTextFilterFn(rows, id, filterValue) {
//   return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
// }

// Let the table remove the filter if the string is empty
// fuzzyTextFilterFn.autoRemove = val => !val


export default function Table ({ columns, data })  {

	const filterTypes = React.useMemo(
	    () => ({
	      // Add a new fuzzyTextFilterFn filter type.
	      // fuzzyText: fuzzyTextFilterFn,
	      // Or, override the default text filter to use
	      // "startWith"
	      text: (rows, id, filterValue) => {
	        return rows.filter(row => {
	          const rowValue = row.values[id]
	          return rowValue !== undefined
	            ? String(rowValue)
	                .toLowerCase()
	                .startsWith(String(filterValue).toLowerCase())
	            : true
	        })
	      },
	    }),
	    []
	)


	const defaultColumn = React.useMemo(
		() => ({
		  // Let's set up our default Filter UI
		  Filter: DefaultColumnFilter,
		}),
		[]
	)	

	const {
	    getTableProps,
	    getTableBodyProps,
	    headerGroups,
	    prepareRow,
	    page, // Instead of using 'rows', we'll use page,
	    // which has only the rows for the active page
	    rows,

	    // Pagination Props
	    // The rest of these things are super handy, too ;)
	    canPreviousPage,
	    canNextPage,
	    pageOptions,
	    pageCount,
	    gotoPage,
	    nextPage,
	    previousPage,
	    setPageSize,
	    state: { pageIndex, pageSize, globalFilter },		

	    // Search / Filtering Props
	    preGlobalFilteredRows,
	    setGlobalFilter,	    

	} = useTable(
		{
			columns,
			data,
			initialState: { pageindex: 2 },	
			defaultColumn,
			// filterTypes,
		},
		useFilters,
		useGlobalFilter,
		usePagination
	)


    // Render the UI for your table
	return (
	    <React.Fragment>
	      <div className="float-right">
          	<GlobalFilter
           		preGlobalFilteredRows={preGlobalFilteredRows}
            	globalFilter={globalFilter}
            	setGlobalFilter={setGlobalFilter}
          	/>
	      </div>
	      <table {...getTableProps()} className="table mt-4 mb-3">
	        <thead>
	          {headerGroups.map(headerGroup => (
	            <tr {...headerGroup.getHeaderGroupProps()}>
	              {headerGroup.headers.map(column => (
	                <th {...column.getHeaderProps()} style={{ verticalAlign: 'middle' }}>
	                	{column.render('Header')}
	                    <div>{column.canFilter ? column.render('Filter') : null}</div>
	                </th>
	              ))}
	            </tr>
	          ))}
	        </thead>
	        <tbody {...getTableBodyProps()}>
	          {page.map((row, i) => {
	            prepareRow(row)
	            return (
	              <tr {...row.getRowProps()}>
	                {row.cells.map(cell => {
	                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
	                })}
	              </tr>
	            )
	          })}
	        </tbody>
	      </table>
	      {/* 
	        Pagination can be built however you'd like. 
	        This is just a very basic UI implementation:
	      */}
	      <div className="float-right mb-3">
	        <select
	          style={{ padding: '7px', borderRadius: '3px', border: '1px solid #007bff' }}
	          value={pageSize}
	          onChange={e => {
	            setPageSize(Number(e.target.value))
	          }}
	        >
	          {[10, 20, 30, 40, 50].map(pageSize => (
	            <option key={pageSize} value={pageSize}>
	              Show {pageSize}
	            </option>
	          ))}
	        </select>{' '}
	        <button className="btn btn-outline-primary" style={{ marginTop: '-4px' }} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
	          {'<<'}
	        </button>{' '}
	        <button className="btn btn-outline-primary" style={{ marginTop: '-4px' }} onClick={() => previousPage()} disabled={!canPreviousPage}>
	          {'<'}
	        </button>{' '}
	        <span>
	          Page{' '}
	          <strong>
	            {pageIndex + 1} of {pageOptions.length}
	          </strong>{' '}
	        </span>
	        <button className="btn btn-outline-primary" style={{ marginTop: '-4px' }} onClick={() => nextPage()} disabled={!canNextPage}>
	          {'>'}
	        </button>{' '}
	        <button className="btn btn-outline-primary" style={{ marginTop: '-4px' }} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
	          {'>>'}
	        </button>
	      </div>
	    </React.Fragment>
	)
}