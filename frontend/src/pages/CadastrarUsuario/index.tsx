import { Link } from 'react-router-dom';
import { useState } from "react";
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';


function CadastrarUsuario() {

    let newPageTitle = 'SCD - Cadastro de Usuário';
    document.title = newPageTitle;
    return (
        <div>
            <Header />
            <NavBar />

            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card-login">
                            <h2 className="scd-diarias-titulo">Cadastrar Usuário</h2>
                            <form>
                                <div>
                                    <div className="scd-form-control-login-container">
                                        <div>
                                            <label htmlFor="nome">Nome:</label>
                                            <input type='text' className='scd-form-control-login mb-3' name='nome' required />
                                        </div>
                                        <div>
                                            <label htmlFor="matricula">Matrícula:</label>
                                            <input type='text' className='scd-form-control-login mb-2' name='nomatricula' required />
                                        </div>

                                    </div>
                                </div>
                                <div className="scd-btn-login">
                                    <Link to='/diaria'>
                                        <input type='submit' className='btn-login-form' value="Cadastrar" />
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default CadastrarUsuario;