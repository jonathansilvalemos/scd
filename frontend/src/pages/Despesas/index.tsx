import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../../utils/requests";
import { Diaria } from "../../types/diaria";

registerLocale('pt-br', ptBR);

function Despesas() {

    let newPageTitle = 'SCD - Despesas';
    document.title = newPageTitle;
    let formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }

    let totalDiaria: number;
    let valorRecebido: number;
    let valorReceber: number;
    let valorGastoDiaria: number;
    let descontoAlimentacao: number;
    let descontoTransporte: number;
    let saldoDiaria: number;

    const { cod, mat, tip } = useParams();
    const min = new Date(new Date().setDate(new Date().getDate() - 30));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [diariaTotal, setDiariaTotal] = useState(0);
    const [gastoValor, setGastoValor] = useState(0);
    const [diariaSaldo, setDiariaSaldo] = useState(0);
    const [diariaRecebido, setDiariaRecebido] = useState(0);
    const [diariaReceber, setDiariaReceber] = useState(0);
    const [alimentacaoDesconto, setAlimentacaoDesconto] = useState(0);
    const [transporteDesconto, setTransporteDesconto] = useState(0);
    const [dados, setDados] = useState<Diaria[]>([]);

    useEffect(() => {
        totalDiaria = 0;
        valorRecebido = 0;
        valorReceber = 0;
        valorGastoDiaria = 0;
        saldoDiaria = 0;
        descontoAlimentacao = 0;
        descontoTransporte = 0;

        const dataMinima = minDate.toISOString().slice(0, 10);
        const dataMaxima = maxDate.toISOString().slice(0, 10);

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'GET',
            url: `/diaria/despesa?user=${cod}&mindate=${dataMinima}&maxdate=${dataMaxima}`,
        }

        axios(config).then(response => {

            console.log(response.data);
            const data = response.data as Diaria[];
            setDados(data);

            dados.forEach(u => {
                totalDiaria = u.valorDiaria + totalDiaria;

                if (u.status == 1) {
                    valorRecebido = valorRecebido + u.valorDiaria;
                } else {
                    valorReceber = valorReceber + u.valorDiaria;
                }
                valorGastoDiaria = valorGastoDiaria + u.valorGasto;
                saldoDiaria = valorRecebido - valorGastoDiaria;
                descontoAlimentacao = (totalDiaria * 0.04);
                descontoTransporte = (totalDiaria * 0.009);
            });

            setDiariaTotal(totalDiaria);
            setGastoValor(valorGastoDiaria);
            setDiariaSaldo(saldoDiaria);
            setDiariaRecebido(valorRecebido);
            setDiariaReceber(valorReceber);
            setAlimentacaoDesconto(descontoAlimentacao);
            setTransporteDesconto(descontoTransporte);
        }).catch((err) => {
            alert('Erro ao carregar Usuários' + err);
        });
    }, [minDate, maxDate]);

    return (
        <div>
            <Header />
            <NavBarAdmin />
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

                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Total de Diárias:</label>
                                            <input className="scd-form-control" type="text" value={`${diariaTotal.toLocaleString('pt-br', formato)}`} disabled />
                                        </div>
                                    </div>

                                    <div className="scd-container-valores mb-3">
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Valor Recebido:</label>
                                            <input className="scd-form-control" type="text" value={`${diariaRecebido.toLocaleString('pt-br', formato)}`} disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Valor a Receber:</label>
                                            <input className="scd-form-control" type="text" value={`${diariaReceber.toLocaleString('pt-br', formato)}`} disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Valor Gasto:</label>
                                            <input className="scd-form-control" type="text" value={`${gastoValor.toLocaleString('pt-br', formato)}`} disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Saldo de diárias:</label>
                                            <input className="scd-form-control" type="text" value={`${diariaSaldo.toLocaleString('pt-br', formato)}`} disabled />
                                        </div>
                                    </div>
                                    <div className="scd-container-valores mt-2">
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Desconto no Vale Alimentação:</label>
                                            <input className="scd-form-control" type="text" value={`${alimentacaoDesconto.toLocaleString('pt-br', formato)}`} disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Desconto no Vale Transporte:</label>
                                            <input className="scd-form-control" type="text" value={`${transporteDesconto.toLocaleString('pt-br', formato)}`} disabled />
                                        </div>
                                    </div>
                                </div>

                                <div className="scd-btn-login mt-5">
                                    <Link to={`/diaria/${cod}/${mat}/${tip}`}>
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