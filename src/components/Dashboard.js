import React from 'react'
import styled from 'styled-components'
import BarChart from './graphs/BarChart'
import DonutChart from './graphs/DonutChart'
import Card from './cards/Card'
import ProgressBar from './ProgressBar'
// import DataTable from '../components/DataTable'

const DashboardGrid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: 
        "a a a a a a b b b b b b"
        "c c c c c c c c c c c c"
        "e e e e e e e e e e e e"
        "d d d d d d d d d d d d";
    @media ${({theme: {mediaQueries}}) => mediaQueries.dashboard._1100} {
        grid-template-areas:
            "a a a a a a b b b b b b"
            "c c c c c c e e e e e e"
            "d d d d d d d d d d d d";
    }
    @media ${({theme: {mediaQueries}}) => mediaQueries.dashboard._1500} {
        grid-template-areas:
            "a a a b b b e e e e e e"
            "c c c c c c e e e e e e"
            "d d d d d d d d d d d d";
    }
`

const A_TODAY_PRESENT = styled.div`
    grid-area: a;
`

const B_OVERTIME = styled.div`
    grid-area: b;
`

const C_BAR_CHART = styled.div`
    grid-area: c;
`

const D_DATATABLE = styled.div`
    grid-area: d;
`

const E_DONUT = styled.div`
    grid-area: e;
`

const usersColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Ime', width: 170 },
    { field: 'username', headerName: 'Korisničko ime', width: 200 },
    { field: 'email', headerName: 'E-adresa', width: 270 },
    // { field: 'address', headerName: 'Adresa', width: 170 }
]


function Dashboard() {
    return (
        <DashboardGrid>
            <A_TODAY_PRESENT>
                <Card heading='Today present'>
                    <ProgressBar fillColor='#4f66df' progress={45} />
                </Card>    
            </A_TODAY_PRESENT>
            
            <B_OVERTIME>
                <Card heading='Overtime'>
                    <ProgressBar fillColor='#4f66df' progress={15} />
                </Card>    
            </B_OVERTIME>

            <C_BAR_CHART>
                <Card heading='Some bar chart'>
                    <BarChart />
                </Card>
            </C_BAR_CHART>

            {/* <D_DATATABLE>
                <Card heading='Present'>
                    <DataTable
                        columns={usersColumns}
                        url='https://jsonplaceholder.typicode.com/users'
                        pageSize={4}
                        width='100%'
                        height='450px'
                        checkboxSelection
                    />
                </Card>                
            </D_DATATABLE> */}

            <E_DONUT>
                <Card heading='Some donut'>
                    <DonutChart />
                </Card>
            </E_DONUT>
        </DashboardGrid>
    )
}

export default Dashboard