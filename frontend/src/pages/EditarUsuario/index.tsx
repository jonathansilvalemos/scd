import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import EditarBotao from "../../components/EditarBotao";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import axios from "axios";
import { BASE_URL } from "../../utils/requests";
import { Usuario } from "../../types/usuario";

registerLocale('pt-br', ptBR);

function EditarUsuario() {

    let newPageTitle = 'SCD - Editar Usuario';
    document.title = newPageTitle;

    const { cod, mat, tip } = useParams();
    const [usuario, setUsuario] = useState<Usuario[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/usuario`)
            .then(response => {
                setUsuario(response.data.content);
            })

            .catch((err) => {
                alert('Erro ao carregar Usuários' + err);
            });
    }, [])

    return (
        <>
            <Header />
            <NavBarAdmin />
            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card">
                            <h2 className="scd-diarias-titulo">Editar Usuários</h2>

                            <div>
                                <table className="scd-diarias-table">
                                    <thead>
                                        <tr>
                                            <th>Código</th>
                                            <th>Nome</th>
                                            <th>Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usuario.map(u => {
                                            return (
                                                <tr key={u.codigo}>
                                                    <td>{u.codigo}</td>
                                                    <td>{u.nome}</td>
                                                    <td>
                                                        <div className="scd-red-btn-container">
                                                            <a href={"/usuario/editar/" + `${cod}/${mat}/${tip}/${u.codigo}`}><EditarBotao /></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
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

export default EditarUsuario;