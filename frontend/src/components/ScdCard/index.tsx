import './styles.css';
import editar from '../../assets/img/editar.svg';
import EditarBotao from '../../components/EditarBotao';

function ScdCard() {
    return (
        <div className="scd-card">
            <h2 className="scd-diarias-titulo">Diárias</h2>
            <div>
                <div className="scd-form-control-container">
                    <input className="scd-form-control" type="text" />
                </div>
                <div className="scd-form-control-container">
                    <input className="scd-form-control" type="text" />
                </div>
            </div>

            <div>
                <table className="scd-diarias-table">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Cidade</th>
                            <th className="show576">Portaria</th>
                            <th>Valor</th>
                            <th>Status</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20/10/2022</td>
                            <td>Rio Grande</td>
                            <td className="show576">320</td>
                            <td>R$ 77,00</td>
                            <td>Pago</td>
                            <td>
                                <div className="scd-red-btn-container">
                                    <EditarBotao />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>20/10/2022</td>
                            <td>Rio Grande</td>
                            <td className="show576">320</td>
                            <td>R$ 77,00</td>
                            <td>Pago</td>

                            <td>
                                <div className="scd-red-btn-container">
                                    <EditarBotao />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>20/10/2022</td>
                            <td>Rio Grande</td>
                            <td className="show576">320</td>
                            <td>R$ 77,00</td>
                            <td>Pago</td>
                            <td>
                                <div className="scd-red-btn-container">
                                    <EditarBotao />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ScdCard;
