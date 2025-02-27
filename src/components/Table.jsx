import DataTable from 'react-data-table-component';

const Table = ({ data }) => {
	if (data === null)
		return <p className='text-center text-xl p-2'>No hay datos disponibles</p>;

	const columns = Object.keys(data[0])
		.filter(key => !key.includes("id"))  // Filtrar las claves que contienen 'id'
		.map(key => ({
			name: key,  // Traducir el nombre de la columna directamente
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
				minHeight: '48px',
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
				fontSize: '16px',
				fontWeight: 'bold',
				whiteSpace: 'normal', // Permite que el texto ocupe más de una línea si es necesario
				wordWrap: 'break-word', // Para permitir que el texto largo se divida en varias líneas
				overflow: 'visible', // Asegura que el contenido no se corte
				textOverflow: 'clip', // Evita que el texto se recorte
				maxWidth: 'none', // Elimina cualquier límite de ancho
			},
		},
		cells: {
			style: {
				paddingLeft: '8px',
				paddingRight: '8px',
				fontSize: '16px',
				paddingTop: '8px',
				paddingBottom: '8px',
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
			customStyles={customStyles}
			paginationPerPage={8}
			paginationRowsPerPageOptions={[5, 8, 10, 15, 20]}
		/>
	);

};

export default Table;
