import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';

registerLocale('pt-br', ptBR);

function Diaria() {

    let newPageTitle = 'SCD - Cadastrar diária';
    document.title = newPageTitle;
    return (
        <>
            <h1 className="display-6 titulo-escala">Cadastro de Diária</h1>

            <div className="col-sm-6 p-5">
                <form className="row align-items-center">
                    <div className="mb-2">
                        <label htmlFor="DatePicker" className='form-label'>Dia da viagem:</label>
                        <DatePicker
                            locale="pt-br"
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="scd-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="mb-3 col-sm-6">
                        <label htmlFor="nome" className="label-control">Cidade:</label>
                        <select className="form-select" aria-label=".form-select-sm example">
                            <option selected>Cidade de destino</option>
                            <option value="1">Pelotas</option>
                            <option value="2">Piratini</option>
                            <option value="3">Bagé</option>
                            <option value="4">Jaguarão</option>
                            <option value="5">Santa Maria</option>
                            <option value="6">Porto Alegre</option>
                        </select>
                    </div>

                    <div className="mb-3 col-sm-3">
                        <label htmlFor="nome" className="label-control">Valor da diária:</label>
                        <div className="input-group">
                            <div className="input-group-text">R$</div>
                            <input type="text" className="form-control" disabled />
                        </div>

                    </div>
                    <div className="mb-3 col-sm-3">
                        <label htmlFor="nome" className="label-control">Valor gasto:</label>
                        <div className="input-group">
                            <div className="input-group-text">R$</div>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="mb-3 col-sm-12">
                        <label htmlFor="inputGroupComprovante" className="label-control">Comprovante de deslocamento:</label>
                        <div className="input-group">
                            <input type="file" className="form-control" id="inputGroupComprovante" aria-describedby="inputGroupComprovante" />
                        </div>
                    </div>

                    <div className="mb-3 col-sm-12">
                        <label htmlFor="inputGroupGasto" className="label-control">Comprovante de gastos:</label>
                        <div className="input-group">
                            <input type="file" className="form-control" id="inputGroupGasto" aria-describedby="inputGroupGasto" />
                        </div>
                    </div>
                    <Link to='/'>
                        <div className="btn btn-primary col-auto">Cadastrar</div>
                    </Link>


                </form>
            </div>

        </>
    );
}

export default Diaria;