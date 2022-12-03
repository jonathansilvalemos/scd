import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import { useEffect, useState } from "react";
import './styles.css';
import Header from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../../utils/requests";
import { Cidade } from "../../types/cidade";
import { Diaria } from "../../types/diaria";

registerLocale('pt-br', ptBR);

function DiariaEditar() {

    let newPageTitle = 'SCD - Editar diária';
    document.title = newPageTitle;

    const { cod, mat, tip, id } = useParams();
    const data = new Date();

    const [dataDiaria, setDataDiaria] = useState(data);
    const [cidade, setCidade] = useState<Cidade[]>([]);
    const [valor, setValor] = useState(77);
    const [diaria, setDiaria] = useState<Diaria>();
    const [despesa, setDespesa] = useState<File>();
    const [deslocamento, setDeslocamento] = useState<File>();

    useEffect(() => {

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'GET',
            url: '/cidade'
        }

        axios(config).then(response => {
            setCidade(response.data.content)
        }).catch((err) => {
            console.log("Erro: " + err);
        });


    }, [])

    useEffect(() => {

        axios.get(`${BASE_URL}/diaria/${id}`)
            .then(response => {
                console.log(response.data);
                setDiaria(response.data);
                setDespesa(response.data.compDespesa);
                setDeslocamento(response.data.compDesloca)
                setDataDiaria(new Date(response.data.data));

            })
            .catch((err) => {
                alert('Erro ao carregar Usuários' + err);
            });
    }, [id])
   
    return (
        <div>
            <Header />
            <NavBarAdmin />
            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card">
                            <h2 className="scd-diarias-titulo">Editar Diária</h2>
                            <form>
                                <div>
                                    <div className="scd-form-control-container">
                                        <label htmlFor="DatePicker">Data da viagem</label>
                                        <DatePicker
                                            locale="pt-br"
                                            selected={dataDiaria}
                                            onChange={(date: Date) => setDataDiaria(date)}
                                            className="scd-form-control"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="sel1">Cidade:</label>
                                        <div className="scd-form-container-cadastro">
                                            <select className="scd-form-control" id="sel1" name="selecionado" onChange={v => setValor(Number.parseInt(v.target.value))}>
                                                {cidade.map((x) => {
                                                    return (
                                                        (x.nome != diaria?.cidade) ?
                                                            <option key={x.id} value={x.valor} > {x.nome} </option> :
                                                            <option key={x.id} value={x.valor} defaultChecked> {x.nome} </option>
                                                    )
                                                }
                                                )
                                                }
                                            </select>
                                        </div>
                                        <div className="scd-container-valores">
                                            <div className="scd-form-container-cadastro">
                                                <label className="mt-3" htmlFor="valor">Valor:</label><br />
                                                <input className="scd-form-control valores" type="text" value={`${valor}`} disabled />
                                            </div>
                                            <div className="scd-form-container-cadastro">
                                                <label className="mt-3" htmlFor="valor">Valor Gasto:</label><br />
                                                <input className="scd-form-control valores" defaultValue={diaria?.valorGasto} type="text" placeholder="Despesa do dia R$" />
                                            </div>
                                            <div className="scd-form-container-cadastro">
                                                <label className="mt-3" htmlFor="valor">Portaria:</label><br />
                                                <input className="scd-form-control valores" defaultValue={diaria?.portaria} type="number" />
                                            </div>
                                        </div>
                                        <label className="mt-3" htmlFor="radio">Status de Pagamento</label>
                                        <div className="radio">
                                            {diaria?.status == 1 ?
                                                <label><input type="radio" name="status" defaultChecked /> Pago</label> :
                                                <label><input type="radio" name="status" /> Pago</label>
                                            }
                                        </div>
                                        <div className="radio mb-3">
                                            {diaria?.status == 0 ?
                                                <label><input type="radio" name="status" defaultChecked /> Pendente</label> :
                                                <label><input type="radio" name="status" /> Pendente</label>
                                            }

                                        </div>
                                        <div className="mb-3 scd-form-container-cadastro">
                                            <label htmlFor="formFile" className="form-label">Comprovante de Despesa</label>
                                            <input className="form-control-arquivo" type="file" id="formFile" />

                                            <Link to={`/diaria/listar/mostrardespesa/${cod}/${mat}/${tip}/${diaria?.id}`}>
                                                <button className="btn-primary p-1">
                                                    Abrir Despesa
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="mb-3 scd-form-container-cadastro">
                                            <label htmlFor="formFile" className="form-label">Comprovante de Deslocamento</label>
                                            <input className="form-control-arquivo" type="file" id="formFile" />

                                            <Link to={`/diaria/listar/mostrardeslocamento/${cod}/${mat}/${tip}/${diaria?.id}`}>
                                                <button className="btn-primary p-1">
                                                    Abrir Deslocamento
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="scd-btn-login">
                                    <Link to='/diaria'>
                                        <input type='submit' className='btn-login-form' value="Salvar" />
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default DiariaEditar;