import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import EditarBotao from "../../components/EditarBotao";
import { useState } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

registerLocale('pt-br', ptBR);

function Despesas() {

    let newPageTitle = 'SCD - Despesas';
    document.title = newPageTitle;

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <div>
            <Header />
            <NavBar />
            <main>
                <section id="diarias">
                    <div className="scd-container">
                        <form>
                            <div className="scd-card">
                                <h2 className="scd-diarias-titulo">Dados de Despesas</h2>
                                <div>
                                    <div className="scd-form-control-container">
                                        <label>Data Inicial</label>
                                        <DatePicker
                                            locale="pt-br"
                                            selected={minDate}
                                            onChange={(date: Date) => setMinDate(date)}
                                            className="scd-form-control"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>

                                    <div className="scd-form-control-container">
                                        <label>Data Final</label>
                                        <DatePicker
                                            locale="pt-br"
                                            selected={maxDate}
                                            onChange={(date: Date) => setMaxDate(date)}
                                            className="scd-form-control"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                    <div className="scd-container-valores mb-3">
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Valor Recebido:</label>
                                            <input className="scd-form-control" type="text" value="R$ 77,00" disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Valor a Receber:</label>
                                            <input className="scd-form-control" type="text" value="R$ 77,00" disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Valor Gasto:</label>
                                            <input className="scd-form-control" type="text" value="R$ 77,00" disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Saldo de diárias:</label>
                                            <input className="scd-form-control" type="text" value="R$ 77,00" disabled />
                                        </div>
                                    </div>
                                    <div className="scd-container-valores mt-2">
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Desconto no Vale Alimentação:</label>
                                            <input className="scd-form-control" type="text" value="R$ 77,00" disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Desconto no Vale Transporte:</label>
                                            <input className="scd-form-control" type="text" value="R$ 77,00" disabled />
                                        </div>
                                    </div>
                                </div>
                                <div className="scd-btn-login mt-5">
                                    <Link to='/diaria'>
                                        <input type='submit' className='btn-login-form' value="Retornar" />
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Despesas;