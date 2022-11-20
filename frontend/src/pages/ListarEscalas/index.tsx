import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import ExcluirBotao from "../../components/ExcluirBotao";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../../utils/requests";
import { Escala, EscalaPage } from "../../types/escala";
import PaginationEscala from "../../components/PaginationEscala";
import { blobToFile } from '../../utils/imagem';
import { Script } from "vm";
import MostrarEscala from "../../pages/MostrarEscala";



registerLocale('pt-br', ptBR);

type Props = {
    u: Escala;
}

type Props2 = {
    imagem: Blob;
}

function ListarEscalas() {

    let newPageTitle = 'SCD - Listar Escalas';
    document.title = newPageTitle;

    const { cod, mat, tip } = useParams();
    //const [escala, setEscala] = useState<Escala[]>([]);
    const [imagem, setImagem] = useState<Blob>()
    const [arquivo, setArquivo] = useState<any>();

    const mostrarEscala = (dado: Blob) => {
        setImagem(dado);
    }

    const [page, setPage] = useState<EscalaPage>({
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
        async function listarEscalas() {
            const config: AxiosRequestConfig = {
                baseURL: BASE_URL,
                method: 'GET',
                url: `/escala?size=5&page=${pageNumber}&sort=data`
            }
            await axios(config).then(response => {
                const data = response.data as EscalaPage;
                setPage(data);        
                console.log("DATA: " + data.content.map(con=>(con.data)))        
            }).catch((err) => {
                alert('Erro ao carregar Usuários' + err);
            });
        }
        listarEscalas();

    }, [pageNumber])

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
                            <h2 className="scd-diarias-titulo">Listar Escalas</h2>
                            <PaginationEscala page={page} onChange={handlePageChange} />
                            <div>
                                <table className="scd-diarias-table">
                                    <thead>
                                        <tr>
                                            <th>Código</th>
                                            <th>Data</th>
                                            <th>Escala</th>
                                            <th>Excluir</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {page.content.map(u =>

                                        (
                                            
                                            <tr key={u.id} onLoad={() => setImagem(u.escala)}>
                                           
                                                <td>{u.id}</td>
                                                <td>{new Date(u.data).toLocaleDateString('pt-br')}</td>

                                                <td>

                                                    <Link to={`/escala/listar/mostrar/${cod}/${mat}/${tip}/${u.id}`}>
                                                        <button className="btn-primary p-1">
                                                            abrir escala
                                                        </button>

                                                    </Link>
                                                </td>
                                                <td>
                                                    <div className="scd-red-btn-container">
                                                        <a href={"/escala/excluir/" + `${cod}/${mat}/${tip}/${u.id}`}><ExcluirBotao /></a>
                                                    </div>
                                                </td>

                                            </tr>
                                        )
                                        )}
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

export default ListarEscalas;