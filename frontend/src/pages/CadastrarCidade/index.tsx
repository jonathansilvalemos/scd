import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { Cidade } from 'types/cidade';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../../utils/requests';
import isEmpty from '../../utils/isEmpety';
import NavBarAdmin from '../../components/NavBarAdmin';

function CadastrarCidade() {

    type Props = {
        codigo: number;
        matriculaId: number;
    }

    let newPageTitle = 'SCD - Cadastro de Cidade';
    document.title = newPageTitle;

    const [cidade, setCidade] = useState<Cidade>()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nome = (event.target as any).nome.value;
        const valor = (event.target as any).valor.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/cidade/cadastrarcidade',
            data: {
                nome: nome,
                valor: valor
            }
        }

        axios(config).then(response => {
            if (isEmpty(response.data)) {
                alert("Cidade já cadastrada!");
            } else {
                alert("Cidade cadastrada com sucesso!");
            }

        }).catch((err) => {
            console.log("Erro: " + err);
        });
    }
    const { codigo, matricula } = useParams();
    return (
        <div>
            <Header />
            <NavBarAdmin />
            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card-login">
                            <h2 className="scd-diarias-titulo">Cadastrar Cidade</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="scd-form-control-login-container">
                                        <div>
                                            <label htmlFor="cidade">Cidade:</label>
                                            <input type='text' className='scd-form-control-login mb-3' autoFocus name='nome' required />
                                        </div>
                                        <div>
                                            <label htmlFor="valor">Valor:</label>
                                            R$ <input type="number" className='scd-form-control-login mb-2' name="valor"
                                                step="0.01" min="44.00" required />

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
        </div>
    );
}

export default CadastrarCidade;