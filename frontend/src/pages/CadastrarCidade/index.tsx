import { Link } from 'react-router-dom';
import { useState } from "react";
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';


function CadastrarCidade() {

    let newPageTitle = 'SCD - Cadastro de Cidade';
    document.title = newPageTitle;
    return (
        <div>
            <Header />
            <NavBar />
            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card-login">
                            <h2 className="scd-diarias-titulo">Cadastrar Cidade</h2>
                            <form>
                                <div>
                                    <div className="scd-form-control-login-container">
                                        <div>
                                            <label htmlFor="cidade">Cidade:</label>
                                            <input type='text' className='scd-form-control-login mb-3' name='cidade' required />
                                        </div>
                                        <div>
                                            <label htmlFor="valor">Valor:</label>
                                            R$ <input type="number" className='scd-form-control-login mb-2' name="valor"
                                                step="0.01" min="44.00" required />

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

export default CadastrarCidade;