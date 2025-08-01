import React, { useEffect, useState } from 'react';
import CardNotas from './CardNotas';

const ListaNotas = () => {
    const [nota, setNota] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/get_notas?userId=1', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setNota(data))
            .catch(err => console.error('Erro ao carregar nota:', err));
    }, []);

    const abrirModal = () => {
        console.log('abrirModal');
    };

    return (
        <div className="row">
            {nota ? (
                <CardNotas nota={nota} abrirModal={abrirModal} />
            ) : (
                <p>Carregando notas...</p>
            )}
        </div>
    );
};

export default ListaNotas;
