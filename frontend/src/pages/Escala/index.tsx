import './styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
import React, { useState, Component } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import Header from '../../components/Header';
import NavBarAdmin from '../../components/NavBarAdmin';
import axios, { AxiosRequestConfig } from 'axios';
import isEmpty from '../../utils/isEmpety';
import { BASE_URL } from '../../utils/requests';

registerLocale('pt-br', ptBR);

//id s3: AKIAW5NT6UCC4CIR7QTG chave: rBoKNyTSWaL+jYq0t0q6iIPUzXsfwy7hhTvsx0W1

function Escala() {
    let newPageTitle = 'SCD - Cadastrar Escala';
    document.title = newPageTitle;

    const data = new Date();

    const { cod, mat, tip } = useParams();

    const [dataEscala, setDataEscala] = useState(data);
    const [arquivo, setArquivo] = useState<File>();
    const [dado, setDado] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;
        setArquivo(fileList[0]);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const dataEscalada = dataEscala.toISOString().slice(0, 10);
        const formData = new FormData();
     /*  if(arquivo){
            uploadFile(arquivo);
        }
        
        const url = s3.generateUploadURL();
        const { url } = await fetch('/s3Url').then(res=>res.json());
        console.log(url.then(result=>{
            setDado(result);
            console.log("resultado:"+result);
        }));
         await axios.post(`${dado}/`, arquivo)
        .then(response=>{
            console.log(response.data);
        })*/
        
        
        if (arquivo) {
            console.log("Data da escala: " + dataEscala);
            formData.append('diaescala', dataEscalada);
            formData.append('arq', arquivo, arquivo.name);
        }

        await axios.post(`${BASE_URL}/escala`, formData)
            .then(response => {
                console.log(response.data);
                if (isEmpty(response.data)) {
                    alert("Escala já cadastrada!");
                } else {
                    alert("Escala cadastrada com sucesso!");
                }

            }).catch((err) => {
                console.log("Erro: " + err);
            });
    }

    return (
        <div>
            <Header />
            <NavBarAdmin />
            <main>
                <section id="diarias">
                    <div className="scd-container">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="scd-card-login">
                                <h2 className="scd-diarias-titulo mb-2">Cadastrar Escala</h2>
                                <div className='scd-form-control-container mb-3'>
                                    <label htmlFor="DatePicker">Data da Escala:</label>
                                    <DatePicker
                                        locale="pt-br"
                                        selected={dataEscala}
                                        onChange={(date: Date) => setDataEscala(date)}
                                        className="scd-form-control"
                                        dateFormat="dd/MM/yyyy"
                                    />

                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="arquivo">Adicionar pdf da escala:</label>
                                    <input
                                        type="file"
                                        accept='application/pdf'
                                        name="arq"
                                        id='arq'
                                        onChange={handleChange}
                                        required
                                        className="form-control-arquivo" />
                                </div>

                                <div className="scd-btn-login">

                                    <input type='submit' className='btn-login-form' value="Cadastrar" />

                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );

}

export default Escala;