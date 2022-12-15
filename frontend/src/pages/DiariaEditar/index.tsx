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
import isEmpty from "../../utils/isEmpety";

registerLocale('pt-br', ptBR);

function DiariaEditar() {

    let newPageTitle = 'SCD - Editar diária';
    document.title = newPageTitle;

    const { cod, mat, tip, id } = useParams();
    const data = new Date();
    let formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
    const [dataDiaria, setDataDiaria] = useState(data);
    const [cidade, setCidade] = useState<Cidade[]>([]);
    const [valor, setValor] = useState(77);
    const [diaria, setDiaria] = useState<Diaria>();
    const [despesa, setDespesa] = useState<File>();
    const [deslocamento, setDeslocamento] = useState<File>();

    let select = document.querySelector('select');
    let option = select?.children[select.selectedIndex];
    let texto = option?.textContent;

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
                setDiaria(response.data);
                setDespesa(response.data.compDespesa);
                setDeslocamento(response.data.compDesloca);
                setDataDiaria(new Date(response.data.data));
            })
            .catch((err) => {
                alert('Erro ao carregar Diárias ' + err);
            });
    }, [id])

    const handleChangeDeslocamento = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;
        setDeslocamento(fileList[0]);
    };

    const handleChangeDespesa = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;
        setDespesa(fileList[0]);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const dataEscalada = dataDiaria.toISOString().slice(0, 10);
        const formData = new FormData();

        const valorDiaria = (event.target as any).valorDiaria.value;
        const valorGastoDiaria = (event.target as any).valorGasto.value == '' ? 0 : (event.target as any).valorGasto.value;
        const portariaViagem = (event.target as any).portaria.value;
        const status = (event.target as any).status.value;
        const usuario = cod;

        if (deslocamento && despesa && texto && usuario) {
            formData.append('dataviagem', dataEscalada);
            formData.append('cidadeviagem', texto);
            formData.append('valordiariaviagem', valorDiaria);
            formData.append('valorgastoviagem', valorGastoDiaria);
            formData.append('portariaviagem', portariaViagem);
            formData.append('statusviagem', status);
            formData.append('deslocamentoviagem', deslocamento);
            formData.append('despesaviagem', despesa);
            formData.append('usuarioviagem', usuario);
        }

        await axios.put(`${BASE_URL}/diaria/atualizar/${id}`, formData)
            .then(response => {
                console.log(response.data);
                if (isEmpty(response.data)) {
                    alert("Problemas ao atualizar diária!");
                } else {
                    alert("Diária atualizada com sucesso!");
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
                        <div className="scd-card">
                            <h2 className="scd-diarias-titulo">Editar Diária</h2>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                    <div className="scd-container-select">
                                        <label htmlFor="sel1" > Cidade:</label >
                                        <div className="scd-form-container-cadastro-select">
                                            <select className="scd-form-control-select" id='sel1' name="cidadeSelect" onChange={v => setValor(Number.parseInt(v.target.value))}>
                                                {cidade.map((x) => {

                                                    return (
                                                        <option key={x.id} value={x.valor}> {x.nome} </option>
                                                    )
                                                }
                                                )
                                                }
                                            </select>
                                        </div>
                                        <label className="mt-3 " htmlFor="valor" >Valor:</label>
                                        <div className="scd-container-valores">
                                            <div className="scd-form-container-cadastro-select">
                                                <input className="scd-form-control-valor-select" name="valorDiaria" type="text" value={`${valor.toLocaleString('pt-br', formato)}`} disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scd-container-valores">
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Valor Gasto:</label>
                                            <input className="scd-form-control" name="valorGasto" type="text" defaultValue={diaria?.valorGasto} placeholder="Despesa do dia R$" />
                                      
                                        </div>
                                        <div className="scd-form-container-cadastro">
                                            <label className="mt-3" htmlFor="valor">Portaria:</label><br />
                                            <input className="scd-form-control valores" name="portaria" defaultValue={diaria?.portaria} type="number" />
                                        </div>
                                    </div>
                                    <label className="mt-3" htmlFor="radio">Status de Pagamento</label>
                                    <div className="radio">
                                        {diaria?.status == 1 ?
                                            <label><input type="radio" name="status" value={1} defaultChecked /> Pago</label> :
                                            <label><input type="radio" name="status" value={1} /> Pago</label>
                                        }
                                    </div>
                                    <div className="radio">
                                        {diaria?.status == 0 ?
                                            <label><input type="radio" name="status" value={0} defaultChecked /> Pendente </label> :
                                            <label><input type="radio" name="status" value={0} /> Pendente </label>
                                        }
                                    </div>

                                    <div className="mb-3 scd-form-container-cadastro">
                                        <label htmlFor="formFile" className="form-label">Comprovante de Despesa</label>
                                        <input
                                            className="form-control-arquivo"
                                            type="file"
                                            accept='image/jpeg, image/jpg, image/png'
                                            id="despesa"
                                            name="despesa"
                                            onChange={handleChangeDespesa} />

                                        <Link to={`/diaria/listar/mostrardespesa/${cod}/${mat}/${tip}/${diaria?.id}`}>
                                            <button className="btn-primary p-1">
                                                Abrir Despesa
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="mb-3 scd-form-container-cadastro">
                                        <label htmlFor="formFile" className="form-label">Comprovante de Deslocamento</label>
                                        <input
                                            className="form-control-arquivo"
                                            type="file"
                                            accept='image/jpeg, image/jpg, image/png'
                                            id="deslocamento"
                                            name="deslocamento"
                                            onChange={handleChangeDeslocamento} />

                                        <Link to={`/diaria/listar/mostrardeslocamento/${cod}/${mat}/${tip}/${diaria?.id}`}>
                                            <button className="btn-primary p-1">
                                                Abrir Deslocamento
                                            </button>
                                        </Link>

                                    </div>
                                </div>

                                <div className="scd-btn-login">
                                    <input type='submit' className='btn-login-form' value="Atualizar" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section >
            </main >
        </div >
    );
}
export default DiariaEditar;