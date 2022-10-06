import './styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';

registerLocale('pt-br', ptBR);

function Escala() {
    let newPageTitle = 'SCD - Cadastrar escala';
    document.title = newPageTitle;
    return (
        <>
        
            <h1 className="display-6 titulo-escala">Cadastro de Escalas</h1>
            <form>
                <div className="arquivo-escala">

                    <div className="input-group mb-3">

                        <label htmlFor="DatePicker" className='form-label'>Dia da viagem:</label>
                        <DatePicker
                            locale="pt-br"
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="scd-form-control"
                            dateFormat="dd/MM/yyyy"
                        />

                    </div>

                    <div className='form-group'>
                        <label htmlFor='formFile'>Selecione o arquivo da escala: </label><br />
                        <input className="form-control-file" id="formFile" type="file" />
                    </div>
                    <Link to='/'>
                        <div className='btn-voltar btn btn-primary'>Voltar</div>
                    </Link>

                </div>

            </form>

        </>
    );
}

export default Escala;