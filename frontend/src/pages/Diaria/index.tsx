import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import EditarBotao from "../../components/EditarBotao";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { BASE_URL } from "../../utils/requests";
import NavBarAdmin from "../../components/NavBarAdmin";
import { DiariaPage } from "../../types/diaria";
import axios from "axios";
import PaginationDiaria from "../../components/PaginationDiaria";



registerLocale('pt-br', ptBR);

function Diaria() {

    let newPageTitle = 'SCD - Pesquisar diária';
    document.title = newPageTitle;

    const min = new Date(new Date().setDate(new Date().getDate() - 30));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const { cod, mat, tip } = useParams();
    const [page, setPage] = useState<DiariaPage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        first: true,
        size: 5,
        number: 0,
        numberOfElements: 0,
        empty: true
    });
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        const dataMinima = minDate.toISOString().slice(0, 10);
        const dataMaxima = maxDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/diaria/usuario?user=${cod}&mindate=${dataMinima}&maxdate=${dataMaxima}&size=5&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as DiariaPage;
                setPage(data);
            })
            .catch((err) => {
                alert('Erro ao carregar Usuários' + err);
            });
    }, [minDate, maxDate, pageNumber])

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Header />
            <NavBarAdmin />
            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card">
                            <h2 className="scd-diarias-titulo">Pesquisar Diárias</h2>
                            <PaginationDiaria page={page} onChange={handlePageChange} />
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
                                        {page.content.map(u => {
                                            return (
                                                <tr key={u.id}>
                                                    <td>{new Date(u.data).toLocaleDateString('pr-br')}</td>
                                                    <td>{u.cidade}</td>
                                                    <td>{u.portaria}</td>
                                                    <td>{u.valorDiaria}</td>
                                                    <td>{u.status === 0 ? 'Pendente' : 'Pago'}</td>
                                                    <td>
                                                        <div className="scd-red-btn-container">
                                                            <a href={`/diaria/editar/${cod}/${mat}/${tip}/${u.id}`}><EditarBotao /></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        }

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