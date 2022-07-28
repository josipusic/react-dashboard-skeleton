// import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
// // import { DataGrid } from '@material-ui/data-grid';


// const StyledDataGrid = styled.div`
//     height: ${({height}) => height};
//     width: ${({width}) => width};
// `


// function DataTable(props) {

//     const { columns, url, pageSize } = props

//     // default props
//     const checkboxSelection = props.checkboxSelection || false
//     const width = props.width || '100%'
//     const height = props.height || '500px'
    
//     const [rows, setRows] = useState([])

//     useEffect(() => {
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 for (const row in data) {
//                     setRows(prevRows => [...prevRows, data[row]])
//                 }
//             })
//     // url is specified to remove warning even though it will never change
//     // https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
//     }, [url])


//     return (
//         <StyledDataGrid
//             width={width}
//             height={height}
//         >
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 checkboxSelection={checkboxSelection}
//                 pageSize={pageSize}
//             />
//         </StyledDataGrid>
//     )
// }


// export default DataTable