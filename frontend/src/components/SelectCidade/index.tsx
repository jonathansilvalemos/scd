import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { Cidade } from "../../types/cidade";
import { BASE_URL } from "../../utils/requests";


function SelectCidade() {
    const [cidade, setCidade] = useState<Cidade[]>([]);
    const [valor, setValor] = useState(77);
    var v: number;

    useEffect(() => {
        async function retornaCidades() {
            const config: AxiosRequestConfig = {
                baseURL: BASE_URL,
                method: 'GET',
                url: '/cidade/ordenarcidades'
            }

            await axios(config).then(response => {
                console.log(response.data.content);
                setCidade(response.data.content)
            }).catch((err) => {
                console.log("Erro: " + err);
            });
        }
        retornaCidades();
    }, [cidade])

    return (
        <>
            < label htmlFor="sel1" > Cidade:</label >
            <div className="scd-form-container-cadastro">
                <select className="scd-form-control" id='sel1' onChange={v => setValor(Number.parseInt(v.target.value))}>
                    {cidade.map((x, v) => {

                        return (

                            <option key={x.id} value={x.valor}>{x.nome}</option>

                        )

                    }
                    )
                    }
                </select>
                <div className="scd-container-valores">
                    <div className="scd-form-container-cadastro">
                        <label className="mt-3" htmlFor="valor">Valor:</label>
                        <input className="scd-form-control" type="text" value={valor} disabled />
                    </div>
                </div>

            </div>
        </>
    )
}
export default SelectCidade;