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
import { Cidade } from "../../types/cidade";

registerLocale('pt-br', ptBR);

function EditarCidade() {
    var formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }

    let newPageTitle = 'SCD - Editar Cidade';
    document.title = newPageTitle;

    const { cod, mat, tip } = useParams();
    const [cidades, setCidade] = useState<Cidade[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/cidade/?sort=id`)
            .then(response => {
                if (response.data == null) {
                    alert("Nenhuma cidade cadastrada!")
                } else {
                    setCidade(response.data.content);
                }
            })

            .catch((err) => {
                alert('Erro ao carregar Cidades' + err);
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
                            <h2 className="scd-diarias-titulo">Editar Cidades</h2>

                            <div>
                                <table className="scd-diarias-table">
                                    <thead>
                                        <tr>
                                            <th>Código</th>
                                            <th>Nome</th>
                                            <th>Valor</th>
                                            <th>Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cidades.map(cidade => {
                                            return (
                                                <tr key={cidade.id}>
                                                    <td>{cidade.id}</td>
                                                    <td>{cidade.nome}</td>
                                                    <td>{cidade.valor.toLocaleString('pt-br', formato)}</td>
                                                    <td>
                                                        <div className="scd-red-btn-container">
                                                            <a href={"/cidade/editar/" + `${cod}/${mat}/${tip}/${cidade.id}`}><EditarBotao /></a>
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

export default EditarCidade;