import { useParams } from 'react-router-dom';
import React, { useState } from "react";
import Header from '../../components/Header';
import NavBarAdmin from '../../components/NavBarAdmin';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../../utils/requests';
import isEmpty from '../../utils/isEmpety';

function UsuarioCadastrar() {

    let newPageTitle = 'SCD - Cadastro de Usuário';
    document.title = newPageTitle;

    const { cod, mat, tip } = useParams();
   
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const nome = (event.target as any).nome.value;
        const matricula = (event.target as any).matricula.value;
        const senha = (event.target as any).senha.value;
        const tipousuario = (event.target as any).tipo.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/usuario',
            data: {
                nome: nome,
                matricula: matricula,
                senha: senha,
                tipo: tipousuario
            }
        }

        await axios(config).then(response => {
            console.log(response.data);
            if (isEmpty(response.data)) {
                alert("Usuário já cadastrado!");
            } else {
                alert("Usuário cadastrado com sucesso!");
                window.location.href = `/usuario/cadastrarusuario/${cod}/${mat}/${tip}`;
            }
        }).catch((err) => {
            console.log("Erro: " + err);
        });
    }

    return (
        <>
            <Header />
            <NavBarAdmin />
            <main>
                <section id="diarias">
                    <div className="scd-container">
                        <div className="scd-card-login">
                            <h2 className="scd-diarias-titulo">Cadastrar Usuário</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="scd-form-control-login-container">
                                        <div>
                                            <label htmlFor="nome">Nome:</label>
                                            <input
                                                type='text'
                                                className='scd-form-control-login mb-3'
                                                autoFocus
                                                name='nome'
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor="matricula">Matrícula:</label>
                                            <input
                                                type='text'
                                                className='scd-form-control-login mb-2'
                                                name='matricula'
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor="senha">Senha:</label>
                                            <input
                                                type='password'
                                                className='scd-form-control-login mb-2'
                                                name='senha'
                                                required />
                                        </div>
                                        <label className="mt-3" htmlFor="radio">Tipo:</label>
                                        <div className="radio">
                                            <label><input type="radio" required name="tipo" value="admin" /> Administrador</label>
                                        </div>
                                        <div className="radio mb-3">
                                            <label><input type="radio" required name="tipo" value="user" defaultChecked /> Usuário</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="scd-btn-login">
                                    <input type='submit' className='btn-login-form' value="Cadastrar" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default UsuarioCadastrar;