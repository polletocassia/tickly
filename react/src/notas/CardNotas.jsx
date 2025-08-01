import React from 'react';

const CardNotas = ({ abrirModal }) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 mb-3">
                <div className="card card-nota p-3 modal-body-radius"
                onClick={abrirModal}
                style={{ cursor: 'pointer' }}>

                    <div className="col-md-10 form-title mb-4">
                        <span className="input fake-input">Título da Nota</span>
                        <span className="input-border full"></span>
                    </div>

                    <div className="col-md-12">
                        <span className="col-md-10 mt-2 ms-2">Tarefa 1</span>
                    </div>

                    <hr className='col-md-10 float-center'></hr>

                </div>
            </div>
        </>
    );
}

export default CardNotas;