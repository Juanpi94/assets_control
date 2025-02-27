import React from 'react';
import useAxiosCrud from '../hooks/useAxiosCrud';

const MyComponent = ({ endpoint }) => {
    const { data, loading, error, get, post, put, remove } = useAxiosCrud();

    const fetchData = async () => {
        await get(endpoint); // Obtiene un post específico
    };

    const createData = async () => {
        await post('/posts', { 
            // Area de codigo para crear un nuevo post
            title: 'New Post', body: 'This is a new post', userId: 1 
        });
    };

    const updateData = async () => {
        await put('/posts/1', { id: 1, title: 'Updated Post', body: 'This post has been updated', userId: 1 });
    };

    const deleteData = async () => {
        await remove('/posts/1');
    };

    return (
        <div className='gap-2'>
            <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700' onClick={fetchData}>Fetch Data</button>
            <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700' onClick={createData}>Create Data</button>
            <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700' onClick={updateData}>Update Data</button>
            <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700' onClick={deleteData}>Delete Data</button>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data.data, null, 2)}</pre>}
        </div>
    );
};

export default MyComponent;