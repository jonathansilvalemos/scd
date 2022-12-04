import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Header from '../../components/Header';
import NavBarAdmin from '../../components/NavBarAdmin';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../../utils/requests';
import { Usuario } from 'types/usuario';
import isEmpty from '../../utils/isEmpety';



function UsuarioEditar() {

    let newPageTitle = 'SCD - Editar Usuário';
    document.title = newPageTitle;

    const [usuario, setUsuario] = useState<Usuario>();
    const { cod, mat, tip, id } = useParams();

    useEffect(() => {
        async function atualizaUsuario() {
            const config: AxiosRequestConfig = {
                baseURL: BASE_URL,
                method: 'GET',
                url: `/usuario/${id}`
            }


           await axios(config).then(response => {
                if (isEmpty(response.data)) {
                    alert('Problemas ao atualizar')
                } else {
                    setUsuario(response.data);
                }

            }).catch((err) => {
                console.log("Erro: " + err);
            });
        }
        atualizaUsuario();
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nome = (event.target as any).nome.value;
        const matricula = (event.target as any).matricula.value;
        const senha = (event.target as any).senha.value;
        const tipousuario = (event.target as any).tipo.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/usuario',
            data: {
                codigo: id,
                nome: nome,
                matricula: matricula,
                senha: senha,
                tipo: tipousuario
            }
        }

        axios(config).then(response => {
            window.location.href=`/usuario/editarusuario/${cod}/${mat}/${tip}`;
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
                            <h2 className="scd-diarias-titulo">Editar Usuário</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="scd-form-control-login-container">
                                        <div>
                                            <label htmlFor="nome">Nome:</label>
                                            <input
                                                type='text'
                                                className='scd-form-control-login mb-3'
                                                defaultValue={usuario?.nome}
                                                name='nome'
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor="matricula">Matrícula:</label>
                                            <input
                                                type='text'
                                                className='scd-form-control-login mb-2'
                                                defaultValue={usuario?.matricula}
                                                name='matricula'
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor="senha">Senha:</label>
                                            <input
                                                type='password'
                                                className='scd-form-control-login mb-2'
                                                placeholder='confirmar/atualizar'
                                                name='senha'
                                                required />
                                        </div>
                                        <label className="mt-3" htmlFor="radio">Tipo:</label>
                                        {usuario?.tipo === 'admin' ?
                                            <>
                                                <div className="radio">
                                                    <label><input type="radio" required name="tipo" value="admin" defaultChecked /> Administrador</label>
                                                </div><div className="radio mb-3">
                                                    <label><input type="radio" required name="tipo" value="user" /> Usuário</label>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="radio">
                                                    <label><input type="radio" required name="tipo" value="admin" /> Administrador</label>
                                                </div><div className="radio mb-3">
                                                    <label><input type="radio" required name="tipo" value="user" defaultChecked /> Usuário</label>
                                                </div>
                                            </>

                                        }
                                    </div>
                                </div>
                                <div className="scd-btn-login">

                                    <input type='submit' className='btn-login-form' value="Atualizar" />

                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default UsuarioEditar;