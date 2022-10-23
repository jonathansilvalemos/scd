import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";



registerLocale('pt-br', ptBR);

function CadastrarDiaria() {

    let newPageTitle = 'SCD - Cadastrar diária';
    document.title = newPageTitle;

    const max = new Date();

    const [maxDate, setMaxDate] = useState(max);

    return (
        <div>
            <Header />
            <NavBar />
            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card">
                            <h2 className="scd-diarias-titulo">Cadastrar Diária</h2>
                            <form>
                                <div>
                                    
                                    <div className="scd-form-control-container">
                                        <label htmlFor="DatePicker">Data da viagem</label>
                                        <DatePicker
                                            locale="pt-br"
                                            selected={maxDate}
                                            onChange={(date: Date) => setMaxDate(date)}
                                            className="scd-form-control"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                    <div className="form-group">
                                        
                                        <label htmlFor="sel1">Cidade:</label>
                                        <div className="scd-form-container-cadastro">
                                            <select className="scd-form-control" id="sel1">
                                                <option value="pelotas">Pelotas</option>
                                                <option value="piratini">Piratini</option>
                                                <option selected value="bage">Bagé</option>
                                                <option value="jaguarao">Jaguarão</option>
                                                <option value="saolourenco">São Lourenço do Sul</option>
                                            </select>
                                        </div>
                                        
                                        <div className="scd-container-valores">
                                            <div className="scd-form-container-cadastro">
                                                <label className="mt-3" htmlFor="valor">Valor:</label>
                                                <input className="scd-form-control" type="text" value="R$ 77,00" disabled />
                                            </div>
                                            <div className="scd-form-container-cadastro">
                                                <label className="mt-3" htmlFor="valor">Valor Gasto:</label>
                                                <input className="scd-form-control" type="text" placeholder="Despesa do dia R$" />
                                            </div>
                                            <div className="scd-form-container-cadastro">
                                                <label className="mt-3" htmlFor="valor">Portaria:</label><br />
                                                <input className="scd-form-control valores" type="number" />
                                            </div>
                                        </div>
                                        <label className="mt-3" htmlFor="radio">Status de Pagamento</label>
                                        <div className="radio">
                                            <label><input type="radio" name="status" /> Pago</label>
                                        </div>
                                        <div className="radio mb-3">
                                            <label><input type="radio" name="status" checked /> Pendente</label>
                                        </div>
                                        <div className="mb-3 scd-form-container-cadastro">
                                            <label htmlFor="formFile" className="form-label">Comprovante de Despesa</label>
                                            <input className="form-control-arquivo" type="file" id="formFile" />
                                        </div>
                                        <div className="mb-3 scd-form-container-cadastro">
                                            <label htmlFor="formFile" className="form-label">Comprovante de Deslocamento</label>
                                            <input className="form-control-arquivo" type="file" id="formFile" />
                                        </div>
                                    </div>
                                </div>
                                <div className="scd-btn-login">
                                    <Link to='/diaria'>
                                        <input type='submit' className='btn-login-form' value="Cadastrar" />
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

export default CadastrarDiaria;