import { useState } from 'react';

export default function Register() {

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const alternarVisibilidadeSenha = () => {
        setMostrarSenha(prev => !prev);
    }

    return (
        <>
            <span className="d-flex flex-column text-center mb-4">
                <span className="fw-normal">A vida é feita de pequenas tarefas</span>
                <span className="fw-normal">Começe agora!</span>
            </span>

            <div className="col-md-12 mt-3">
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Nome completo"
                    />
                    <label htmlFor="nome">Nome</label>
                </div>

                <div className="form-floating mb-3" >
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="email">E-mail</label>
                </div>

                <div className="form-floating mb-3 position-relative">
                    <input
                        type={mostrarSenha ? "text" : "password"}
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Senha"
                    />
                    <label htmlFor="senha">Senha</label>

                    <span
                        className="position-absolute top-50 end-0 translate-middle-y me-4"
                        onClick={alternarVisibilidadeSenha}
                        style={{ zIndex: 10 }}
                    >
                        {mostrarSenha ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                            </svg>}
                    </span>
                </div>

                <div className="mb-4">
                    <button type="submit" className="btn btn-add w-100 p-3">
                        Registre-se
                    </button>
                </div>

                <span className='col-md-12 d-flex justify-content-center align-items-center mt-5'>
                    Já tem uma conta? <a href="/login" className='ms-2 text-decoration-none text-pink'> Faça login</a>
                </span>
            </div>

        </>
    )
}