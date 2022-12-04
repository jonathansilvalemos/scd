import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { Cidade } from "../../types/cidade";
import { BASE_URL } from "../../utils/requests";
import './style.css';


function SelectCidade() {
    const [cidade, setCidade] = useState<Cidade[]>([]);
    const [valor, setValor] = useState(77);
    

    useEffect(() => {
        
            const config: AxiosRequestConfig = {
                baseURL: BASE_URL,
                method: 'GET',
                url: '/cidade'
            }

            axios(config).then(response => {
                console.log(response.data.content);
                setCidade(response.data.content)
            }).catch((err) => {
                console.log("Erro: " + err);
            });
        
        
    }, [])

    return (
        <>
            <div className="scd-container-select">
                <label htmlFor="sel1" > Cidade:</label >
                <div className="scd-form-container-cadastro-select">

                    <select className="scd-form-control-select" id='sel1' onChange={v => setValor(Number.parseInt(v.target.value))}>
                        {cidade.map((x, v) => {

                            return (

                                <option key={x.id} value={x.valor}>{x.nome}</option>

                            )

                        }
                        )
                        }
                    </select>
                </div>
                <label className="mt-3 " htmlFor="valor" >Valor:</label>
                <div className="scd-container-valores">

                    <div className="scd-form-container-cadastro-select">

                        <input className="scd-form-control-valor-select" type="text" value={`R$ ${valor}`} disabled />
                    </div>

                </div>
            </div>

        </>
    )
}
export default SelectCidade;