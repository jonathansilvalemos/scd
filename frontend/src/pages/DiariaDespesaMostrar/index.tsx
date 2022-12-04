import axios, { AxiosRequestConfig } from "axios";
import NavBarAdmin from "../../components/NavBarAdmin";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/requests";
import Header from "../../components/Header";
import './style.css';

function DiariaDespesaMostrar() {
    let newPageTitle = 'SCD - Abertura de Despesa';
    document.title = newPageTitle;


    const [imagem, setImagem] = useState<File>();
    const { id } = useParams();
    useEffect(() => {
        async function listarEscalas() {
            const config: AxiosRequestConfig = {
                baseURL: BASE_URL,
                method: 'GET',
                url: `/diaria/${id}`
            }
            await axios(config).then(response => {
                const data = response.data;
                setImagem(data.compDespesa);                
            }).catch((err) => {
                alert('Erro ao carregar Usuários' + err);
            });
        }
        listarEscalas();

    }, [])



    
    return (
        <>
            <Header />
            <NavBarAdmin />
            <main>
                <section id="diarias">
                    <div className="scd-container-despesa">

                        <h2 className="scd-diarias-titulo mb-2">Comprovante de Despesa</h2>
                        <img src={`data:image/jpg;base64,${imagem}`} alt="Despesa" className="embed-img"/>
                      
                        
                    </div>
                </section>
            </main>
        </>
    )
}
export default DiariaDespesaMostrar;