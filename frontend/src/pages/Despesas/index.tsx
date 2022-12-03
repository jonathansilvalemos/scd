import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../../utils/requests";
import { DiariaPage } from "../../types/diaria";

registerLocale('pt-br', ptBR);

function Despesas() {

    let newPageTitle = 'SCD - Despesas';
    document.title = newPageTitle;

    let totalDiaria: number;
    let valorRecebido: number;
    let valorReceber: number;
    let valorGastoDiaria: number;
    let descontoAlimentacao: number;
    let descontoTransporte: number;
    let saldoDiaria: number;

    const { cod, mat, tip, id } = useParams();
    const min = new Date(new Date().setDate(new Date().getDate() - 30));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [diariaTotal, setDiariaTotal] = useState(0);
    const [gastoValor, setGastoValor] = useState(0);
    const [diariaSaldo, setDiariaSaldo] = useState(0);
    const [diariaRecebido, setDiariaRecebido] = useState(0);
    const [diariaReceber, setDiariaReceber] = useState(0);
    const [alimentacaoDesconto, setAlimentacaoDesconto] = useState<number>(0);
    const [transporteDesconto, setTransporteDesconto] = useState<number>(0);
    
    async function recebeDados() {
        const dataMinima = minDate.toISOString().slice(0, 10);
        const dataMaxima = maxDate.toISOString().slice(0, 10);

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'GET',
            url: `/diaria/despesa?user=${cod}&mindate=${dataMinima}&maxdate=${dataMaxima}`,
        }

        axios(config).then(response => {
            console.log(response.data);

            const data = response.data as DiariaPage;
    
            response.data.forEach(u => {
                totalDiaria = u.valorDiaria + totalDiaria;
                console.log("Valor diaria dento: " + u.valorDiaria);
                console.log("Valor gasto dentro: " + u.valorGasto);

                if (u.status == 1) {
                    valorRecebido = valorRecebido + u.valorDiaria;
                } else {
                    valorReceber = valorReceber + u.valorDiaria;
                }
                valorGastoDiaria = valorGastoDiaria + u.valorGasto;
                saldoDiaria = valorRecebido - valorGastoDiaria;
                descontoAlimentacao = descontoAlimentacao + (totalDiaria * 0.01);
                descontoTransporte = descontoTransporte + (totalDiaria * 0.005);
            });
            setDiariaTotal(totalDiaria);
            setGastoValor(valorGastoDiaria);
            setDiariaSaldo(saldoDiaria);
            setDiariaRecebido(valorRecebido);
            setDiariaReceber(valorReceber);
            setAlimentacaoDesconto(parseFloat(descontoAlimentacao).toFixed(2));
            setTransporteDesconto(parseFloat(descontoTransporte).toFixed(2));
        }).catch((err) => {
            alert('Erro ao carregar Usuários' + err);
        });
     
    }

    useEffect(() => {
        totalDiaria = 0;
        valorRecebido = 0;
        valorReceber = 0;
        valorGastoDiaria = 0;
        saldoDiaria = 0;
        descontoAlimentacao = 0;
        descontoTransporte = 0;

        recebeDados();

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
                                            <input className="scd-form-control" type="text" value={`R$ ${diariaTotal}`} disabled />
                                        </div>
                                    </div>

                                    <div className="scd-container-valores mb-3">
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Valor Recebido:</label>
                                            <input className="scd-form-control" type="text" value={`R$ ${diariaRecebido}`} disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Valor a Receber:</label>
                                            <input className="scd-form-control" type="text" value={`R$ ${diariaReceber}`} disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Valor Gasto:</label>
                                            <input className="scd-form-control" type="text" value={`R$ ${gastoValor}`} disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Saldo de diárias:</label>
                                            <input className="scd-form-control" type="text" value={`R$ ${diariaSaldo}`} disabled />
                                        </div>
                                    </div>
                                    <div className="scd-container-valores mt-2">
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Desconto no Vale Alimentação:</label>
                                            <input className="scd-form-control" type="text" value={`R$ ${alimentacaoDesconto}`} disabled />
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Desconto no Vale Transporte:</label>
                                            <input className="scd-form-control" type="text" value={`R$ ${transporteDesconto}`} disabled />
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