import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Header from '../../components/Header';
import { Cidade } from 'types/cidade';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../../utils/requests';
import isEmpty from '../../utils/isEmpety';
import NavBarAdmin from '../../components/NavBarAdmin';
import CurrencyInput from 'react-currency-input-field';

function CidadeEditar() {

    let newPageTitle = 'SCD - Editar Cidade';
    document.title = newPageTitle;

    const { cod, mat, tip, id } = useParams();
    const [cidade, setCidade] = useState<Cidade>();

    useEffect(() => {
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'GET',
            url: `/cidade/${id}`
        }

        axios(config).then(response => {
            if (isEmpty(response.data)) {
                alert('Problemas ao atualizar')
            } else {
                setCidade(response.data);
            }

        }).catch((err) => {
            console.log("Erro: " + err);
        });
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nome = (event.target as any).nome.value;
        const valor = (event.target as any).valor.value;
        const valor2: string = valor.toString().replace(',','.').substring(4, 9);
        const valor3 = parseFloat(valor2);

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/cidade/editar',
            data: {
                id: id,
                nome: nome,
                valor: valor3
            }
        }

        axios(config).then(response => {
            alert("Cidade atualizada com sucesso!");
            window.location.href = `/cidade/editarcidade/${cod}/${mat}/${tip}`;

        }).catch((err) => {
            console.log("Erro: " + err);
        });
    }

    return (
        <div>
            <Header />
            <NavBarAdmin />
            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card-login">
                            <h2 className="scd-diarias-titulo">Editar Cidade</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="scd-form-control-login-container">
                                        <div>
                                            <label htmlFor="cidade">Cidade:</label>
                                            <input
                                                type='text'
                                                className='scd-form-control-login mb-3'
                                                name='nome'
                                                defaultValue={cidade?.nome}
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor="valor">Valor:</label>
                                            <CurrencyInput
                                                className='scd-form-control-login mb-2'
                                                intlConfig={{ locale: 'pt-BR', currency: 'BRA' }}
                                                id="valor"
                                                name="valor"
                                                placeholder="Digite o valor da di??ria"
                                                prefix='R$ '
                                                fixedDecimalLength={2}
                                                defaultValue={cidade?.valor}
                                                decimalsLimit={2}
                                                disableGroupSeparators={false}
                                                disableAbbreviations={true}
                                                autoFocus
                                                required

                                            />
                                        </div>

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
        </div>
    );
}

export default CidadeEditar;