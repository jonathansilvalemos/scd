import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import EditarBotao from "../../components/EditarBotao";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { BASE_URL } from "utils/requests";
import { stringify } from "querystring";
import NavBarAdmin from "../../components/NavBarAdmin";


registerLocale('pt-br', ptBR);

function Diaria() {

    let newPageTitle = 'SCD - Pesquisar diária';
    document.title = newPageTitle;

    const min = new Date(new Date().setDate(new Date().getDate() - 30));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const { cod, mat, tip } = useParams();

    console.log("codigo: " + cod + " matricula: " + mat + "Tipo: " + tip)
    /*useEffect(()=>{
        axios.get(`${BASE_URL}/usuario`)
    },[])*/


    return (
        <>
            <Header />
            <NavBarAdmin />
            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card">
                            <h2 className="scd-diarias-titulo">Pesquisar Diárias</h2>
                            <div>
                                <div className="scd-form-control-container">
                                    <label htmlFor="DatePicker">Data Inicial</label>
                                    <DatePicker
                                        locale="pt-br"
                                        selected={minDate}
                                        onChange={(date: Date) => setMinDate(date)}
                                        className="scd-form-control"
                                        dateFormat="dd/MM/yyyy"
                                    />
                                </div>
                                <div className="scd-form-control-container">
                                    <label htmlFor="DatePicker">Data Final</label>
                                    <DatePicker
                                        locale="pt-br"
                                        selected={maxDate}
                                        onChange={(date: Date) => setMaxDate(date)}
                                        className="scd-form-control"
                                        dateFormat="dd/MM/yyyy"
                                    />
                                </div>
                            </div>

                            <div>
                                <table className="scd-diarias-table">
                                    <thead>
                                        <tr>
                                            <th>Data</th>
                                            <th>Cidade</th>
                                            <th className="show576">Portaria</th>
                                            <th>Valor</th>
                                            <th>Status</th>
                                            <th>Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>05/10/2022</td>
                                            <td>Piratini</td>
                                            <td className="show576">1639</td>
                                            <td>R$ 77,00</td>
                                            <td>Pendente</td>
                                            <td>
                                                <div className="scd-red-btn-container">
                                                    <a href="/editar"><EditarBotao /></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>06/10/2022</td>
                                            <td>Bagé</td>
                                            <td className="show576">1642</td>
                                            <td>R$ 77,00</td>
                                            <td>Pendene</td>
                                            <td>
                                                <div className="scd-red-btn-container">
                                                    <a href="/editar"><EditarBotao /></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>07/10/2022</td>
                                            <td>Pelotas</td>
                                            <td className="show576">1649</td>
                                            <td>R$ 44,00</td>
                                            <td>Pendente</td>
                                            <td>
                                                <div className="scd-red-btn-container">
                                                    <a href="/editar"><EditarBotao /></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Diaria;