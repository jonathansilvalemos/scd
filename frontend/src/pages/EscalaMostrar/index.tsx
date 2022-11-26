import axios, { AxiosRequestConfig } from "axios";
import NavBarAdmin from "../../components/NavBarAdmin";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/requests";
import Header from "../../components/Header";
import './style.css';

function MostrarEscala() {
    let newPageTitle = 'SCD - Abertura de Escala';
    document.title = newPageTitle;


    const [imagem, setImagem] = useState<Blob>();
    const [data, setData] = useState(new Date());

    useEffect(() => {
        async function listarEscalas() {
            const config: AxiosRequestConfig = {
                baseURL: BASE_URL,
                method: 'GET',
                url: `/escala/${id}`
            }
            await axios(config).then(response => {
                const data = response.data;
                setImagem(data.escala);
                setData(data.data);
            }).catch((err) => {
                alert('Erro ao carregar Usuários' + err);
            });
        }
        listarEscalas();

    }, [])



    const { cod, mat, tip, id } = useParams();
    return (
        <>
            <Header />
            <NavBarAdmin />
            <main>
                <section id="diarias">
                    <div className="scd-container-escala">

                        <h2 className="scd-diarias-titulo mb-2">Escala de {new Date(data).toLocaleDateString('pt-br')}</h2>
                        <embed src={`data:application/pdf;base64,${imagem}`} className='embed' />

                    </div>
                </section>
            </main>
        </>
    )
}
export default MostrarEscala;