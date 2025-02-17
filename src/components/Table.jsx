import DataTable from 'react-data-table-component';

const Table = ({ data }) => {
  if (!data || data.length === 0) return <p>No hay datos disponibles</p>;

  const columns = Object.keys(data[0]).map(key => ({
    name: key,
    selector: row => row[key],
    sortable: true,
  }));

  const customStyles = {
    table: {
      style: {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
        borderRadius: '5px',
        border: '1px solid #e0e0e0',
      },
    },
    rows: {
      style: {
        minHeight: '72px',
        fontSize: '16px',
      },
      stripedStyle: {
        backgroundColor: '#f1f1f1', 
        color: 'black',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', 
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', 
        paddingRight: '8px',
        fontSize: '16px',
      }, 
    },
    head: {
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      selectableRows
      striped  
      customStyles={customStyles}
      paginationPerPage={8}  // Establece 5 filas por página
      paginationRowsPerPageOptions={[5, 8, 10, 15, 20]}  // Establece las opciones de filas por página
    />
  );
};

export default Table;
