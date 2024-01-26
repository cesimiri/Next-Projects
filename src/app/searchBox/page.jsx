"use client"
import { useState } from "react";

const initialUsuarios = [
  {
    id: "1",
    nombre: "Cesar",
    apellido: "Miranda",
    edad: 23
  },
  {
    id: "2",
    nombre: "Juan",
    apellido: "Balzar",
    edad: 23
  },
  {
    id: "3",
    nombre: "Carla",
    apellido: "Moreno",
    edad: 24
  },
  {
    id: "4",
    nombre: "Tatiana",
    apellido: "Saltos",
    edad: 23
  },
  {
    id: "5",
    nombre: "Roberto",
    apellido: "Soriano",
    edad: 30
  }
];
function SearchBox() {
  const [usuarios, setUsuario] = useState(initialUsuarios);
  //INPUTS
  const [busqueda, setBusqueda] = useState("");
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState();

  //CONTROLADORAS
  const [btnActivate, setBtnActivate] = useState(true);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleInput = (event) => {
    const inputId = event.target.id;
    const value = event.target.value;
    if (inputId === "id") {
      setId(value);
      let result = usuarios.filter((usuario) => usuario.id === value);
      // console.log(result.length ? "existe" : "no existe");
      value === "" || result.length
        ? setBtnActivate(false)
        : setBtnActivate(true);
    }
    if (inputId === "nombre") {
      setNombre(value);
    }
    if (inputId === "apellido") {
      setApellido(value);
    }
    if (inputId === "edad") {
      setEdad(value);
    }
  };
  const renderUserRow = (usuario) => {
    return (
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={usuario.id}>
        <td>{usuario.id}</td>
        <td>{usuario.nombre}</td>
        <td>{usuario.apellido}</td>
        <td>{usuario.edad}</td>
      </tr>
    );
  };

  //recorre el objeto y filtra por nombre y apellido
  const renderUserResults = () => {
    return usuarios
      .filter((element) => {
        if (
          element.nombre
            .toString()
            .toLowerCase()
            .includes(busqueda.toLowerCase()) ||
          element.apellido
            .toString()
            .toLowerCase()
            .includes(busqueda.toLowerCase())
        ) {
          return element;
        }
      })
      .map((usuario) => renderUserRow(usuario));
  };

  const addUser = () => {
    const NewUser = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      edad: edad
    };

    setUsuario([...usuarios, NewUser]);
    // console.log(NewUser)
    // console.log(usuarios)
    setId("");
    setNombre("");
    setApellido("");
    setEdad("");
  };

  return (
    <div className="">
      <div className="flex">
      <div className="text-lg  w-full  items-center text-center justify-center">
        <header>
          <h1>Search Box</h1>
          {/* {console.log(usuarios)} */}
        </header>
        <div>
          <div>
            <input className=" w-56 p-3 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              //   value={busqueda}
              placeholder="Busqueda de nombre"
              onChange={handleChange}
            />
          </div>

          

          <div>
            <h1>INGRESO NUEVO USUARIO</h1>
          </div>
          
          
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Username"/>
                

          <input className=" w-56 p-3 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="id" 
            onChange={handleInput} 
            value={id} 
            id="id" />

          <input className=" w-56 p-3 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
            value={nombre}
            id="nombre"
          />
          <br />
          <input
          className=" w-56 p-3 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Apellido"
            onChange={handleInput}
            value={apellido}
            id="apellido"
          />

          <input
          className=" w-56 p-3 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="edad"
            onChange={handleInput}
            value={edad}
            id="edad"
          />
          <br />
          <button 
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit" 
          onClick={addUser} 
          disabled={!btnActivate}>
            Ingresar
          </button>

          
        </div>
       
        <div className="">
          <div className=" text-center flex justify-center">
          <table >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">NOMBRE</th>
                <th className="px-6 py-3">APELLIDO</th>
                <th className="px-6 py-3">EDAD</th>
              </tr>
            </thead>
            <tbody>{renderUserResults()}</tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default SearchBox