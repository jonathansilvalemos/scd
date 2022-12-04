import "react-datepicker/dist/react-datepicker.css";
import { useParams } from 'react-router-dom';
import EditarBotao from "../../components/EditarBotao";
import ExcluirBotao from "../../components/ExcluirBotao";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../../utils/requests";
import { Usuario, UsuarioPage } from "../../types/usuario";
import Pagination from "../../components/Pagination";

type Props = {
    u: Usuario;
}

function UsuarioListar() {

    let newPageTitle = 'SCD - Listar Usuários';
    document.title = newPageTitle;

    const { cod, mat, tip } = useParams();
   
    const [page, setPage] = useState<UsuarioPage>({
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
        axios.get(`${BASE_URL}/usuario?size=5&page=${pageNumber}&sort=codigo`)
            .then(response => {
                const data = response.data as UsuarioPage;
                setPage(data);
            })
            .catch((err) => {
                alert('Erro ao carregar Usuários' + err);
            });
    }, [pageNumber])
    
    const excluirUsuario = async (id: number) => { 
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'DELETE',
            url: `/usuario/${id}`            
        }

        await axios(config).then(response => {
            console.log(response);
            if (response.status === 200) {
                window.location.href = `/usuario/editarusuario/${cod}/${mat}/${tip}`;
            } else {
                alert("Erro");
            }
        }).catch((err) => {
            alert("Erro na atualização")
        });
    }

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
                            <h2 className="scd-diarias-titulo">Editar Usuários</h2>
                            <Pagination page={page} onChange={handlePageChange} />
                            <div>
                                <table className="scd-diarias-table">
                                    <thead>
                                        <tr>
                                            <th>Código</th>
                                            <th>Nome</th>
                                            <th>Alterar</th>
                                            <th>Excluir</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {page.content.map(u =>
                                        (
                                            <tr key={u.codigo}>
                                                <td>{u.codigo}</td>
                                                <td>{u.nome}</td>
                                                <td>
                                                    <div className="scd-red-btn-container">
                                                        <a href={"/usuario/editar/" + `${cod}/${mat}/${tip}/${u.codigo}`}><EditarBotao /></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="scd-red-btn-container">
                                                        <a href={"/usuario/excluir/" + `${cod}/${mat}/${tip}/${u.codigo}`} onClick={() =>  {
                                                            if(confirm(`Deseja excluir o usuário ${u.nome}?`)){
                                                                excluirUsuario(u.codigo);        
                                                            }
                                                            } }><ExcluirBotao /></a>
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

export default UsuarioListar;