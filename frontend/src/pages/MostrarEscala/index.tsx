import axios, { AxiosRequestConfig } from "axios";
import NavBar from "../../components/NavBar";
import NavBarAdmin from "../../components/NavBarAdmin";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/requests";
import Header from "../../components/Header";
import './style.css';

function MostrarEscala() {
    let newPageTitle = 'SCD - Listar Escalas';
    document.title = newPageTitle;

    const [imagem, setImagem] = useState<Blob>();

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
            }).catch((err) => {
                alert('Erro ao carregar Usuários' + err);
            });
        }
        listarEscalas();

    }, [])



    const { cod, mat, tip, id } = useParams();
    return (
        <>

            <div>
                <Header/>
                {(() => {
                    if (tip === 'admin') {
                        return (
                            <NavBarAdmin />
                        )
                    } else {
                        return (
                            <NavBar />
                        )
                    }
                })()}
            </div>
            <embed src={`data:application/pdf;base64,${imagem}`} className='embed' />
        </>
    )
}
export default MostrarEscala;