import DataTable from 'react-data-table-component';

const Table = ({ data }) => {
  if (!data || data.length === 0) return <p>No hay datos disponibles</p>;

  // Generar columnas dinámicamente a partir de las claves del primer objeto
  const columns = Object.keys(data[0]).map(key => ({
    name: key,
    selector: row => row[key],
    sortable: true,
  }));

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      selectableRows
    />
  );
};

export default Table;
