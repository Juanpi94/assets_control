import { useState } from 'react';

function Text() {
    const [name, setName] = useState('Tu nombre');

    const handleChange = (e) => {
        setName("Tu nombre: " + e.target.value);
    }

    const handleClick = () => {
        alert(name);
    }

    return (
        <div className="text-center mt-5">
            <h1>{name}</h1>
            <input className='border border-black 
        p-2 w-1/2 text-center rounded-lg bg-gray-200'
                onChange={handleChange}
                type="text" />
            <div className='mt-5'>
                <button type="button"
                    className='bg-blue-500 hover:bg-blue-700 
        text-white font-bold py-2 px-4 rounded'
                    onClick={handleClick}> Enviar </button>
            </div>
        </div>
    )
}

export default Text