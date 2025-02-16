import React from "react";
import Table from "../components/table";
import { useEffect } from 'react';

const Home = ({title, data}) => {
    
        
    return (
        <div className="flex flex-col">
        <h1 className="text-xl font-bold">{title} </h1>
        <Table data={data} />
        </div>
    );
    
    }
    export default Home;