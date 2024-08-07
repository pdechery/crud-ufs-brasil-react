import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import UF from './UF';
import Municipios from './Municipios';
import { UfContext } from './context/AppContext';

export default function BrasilUFsCrud() {

  const [ufs, setUFs] = useState([{
    id: '',
    nome:'',
    sigla:''
  }])
  
  const [municipios, setMunicipios] = useState([{
    id: '',
    nome:'',
    ufId:''
  }])

  useEffect(() => {
    // pegar estados
    fetch('http://localhost:3001/ufs')
    .then(res => {
      if(!res.ok) {
          throw new Error("Houve um problema com a requisição, tente novamente");
      }
      return res.json();
    })
    .then(data => {
      setUFs(data);
      // pegar municípios
      return fetch('http://localhost:3001/municipios').then(res => {
        if(!res.ok) {
            throw new Error("Houve um problema com a requisição, tente novamente");
        }
        return res.json();
      }).then(data => {
        setMunicipios(data);
      });

    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  
  function handleUFChange(newUFs){
    setUFs(newUFs);
  }

  function handleMunicipiosChange(newMncps){
    setMunicipios(newMncps);
  }

  return (
      <div className="pure-u-1">
        <UfContext.Provider value={ufs}>
          <UF setUFs={handleUFChange} />
          <Municipios municipios={municipios} setMncps={handleMunicipiosChange} />
        </UfContext.Provider>
      </div>
    );
}
