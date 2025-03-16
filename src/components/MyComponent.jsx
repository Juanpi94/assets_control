import { DataGrid } from "@mui/x-data-grid";
import { esES } from '@mui/x-data-grid/locales';
import Paper from '@mui/material/Paper';

const MyComponent = ({ data }) => {
    if (data === null)
        return <p className='text-center text-xl p-2'>No hay datos disponibles</p>;

    console.log(data);

    const columns = Object.keys(data[0])
    .filter(key => !key.includes("id"))
    .map(key => ({
        field: key,
        headerName: key,
        width: key.length * 25,
    }));

    const rows = Object.values(data).map(item => item);

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <Paper sx={{ minHeight: 'auto', maxHeight: 'auto', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection 
                localeText={esES.components.MuiDataGrid.defaultProps?.localeText}
                sx={{ border: 0 }}
            />
        </Paper>
    );
}

export default MyComponent