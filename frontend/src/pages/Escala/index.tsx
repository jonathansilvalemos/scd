import './styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

registerLocale('pt-br', ptBR);

function Escala() {
    let newPageTitle = 'SCD - Cadastrar Escala';
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
                        <form>
                            <div className="scd-card-login">
                                <h2 className="scd-diarias-titulo mb-2">Cadastrar Escala</h2>
                                <div className='scd-form-control-container mb-3'>
                                    <label htmlFor="DatePicker">Data da Escala:</label>
                                    <DatePicker
                                        locale="pt-br"
                                        selected={maxDate}
                                        onChange={(date: Date) => setMaxDate(date)}
                                        className="scd-form-control"
                                        dateFormat="dd/MM/yyyy"
                                    />

                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="arquivo">Adicionar pdf da escala:</label>
                                    <input type="file" name="arquivo" className='form-control-arquivo' />
                                </div>

                                <div className="scd-btn-login">
                                    <Link to='/diaria'>
                                        <input type='submit' className='btn-login-form' value="Cadastrar" />
                                    </Link>
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