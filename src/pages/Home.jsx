import React from "react";
import Table from "../components/table";
import { useEffect } from 'react';
import Buttom from "../components/Button";
const Home = ({title, data}) => {
    
        
    return (
        <div className="flex flex-col mx-4">
            <h1 className="  text-3xl font-semibold text-gray-500  ">{title} </h1>
            <div className="flex my-4 justify-between"> 
                <Buttom  text={"Añadir"} Styles={"text-base px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"}  />
                <div className="flex  ">
                <Buttom  text={"Exportar visibles"} Styles={" text-base rounded-l-md px-4 py-2  bg-blue-600 text-white hover:bg-blue-700"}  />
                <Buttom  text={"Exportar todos"} Styles={" text-base px-4 py-2  bg-blue-600 text-white hover:bg-blue-700 ml-[3px] "}  />
                <Buttom  text={"Imprimir"} Styles={" text-base px-4 py-2 rounded-r-md bg-blue-600 text-white hover:bg-blue-700 ml-[3px]"}  />
                </div>
            </div>
            <div className="flex gap-4 mb-4">
                <div className="flex flex-col">
                    <label htmlFor="" className=" font-semibold">Filtrar por:</label>
                    <select name="" id="" className="border-2 border-gray-200 shadow-lg rounded-base px-4 py-2 w-[20rem] text-black h-full">
                        <option value="Seleciona una opcion" selected> Selecione una opcion</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="" className=" font-semibold">Buscar</label>
                    <input type="text"  className="border-2 border-gray-200 shadow-lg rounded-base px-4 py-2  text-black  w-[40rem]"/>
                </div>
            </div>

            <div className=" boder border-2 border-gray-200 shadow-lg rounded-lg">
                <Table  data={data} />
            </div>       
        </div>
    );
    
    }
    export default Home;