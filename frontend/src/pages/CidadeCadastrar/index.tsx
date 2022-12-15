import Header from '../../components/Header';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../../utils/requests';
import isEmpty from '../../utils/isEmpety';
import NavBarAdmin from '../../components/NavBarAdmin';
import CurrencyInput from 'react-currency-input-field';

function CidadeCadastrar() {

    let newPageTitle = 'SCD - Cadastro de Cidade';
    document.title = newPageTitle;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nome = (event.target as any).nome.value;
        const valor = (event.target as any).valor.value;
        const valor2: string = valor.toString().replace(',','.').substring(4, 9);
        const valor3 = parseFloat(valor2);

        const config: AxiosRequestConfig = {
            
            baseURL: BASE_URL,
            method: 'POST',
            url: '/cidade',
            data: {
                nome: nome,
                valor: valor3
            }
        }

        axios(config).then(response => {
            if (isEmpty(response.data)) {
                alert("Cidade já cadastrada!");
            } else {
                alert("Cidade cadastrada com sucesso!");
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

                        <div className="scd-card-login">
                            <h2 className="scd-diarias-titulo">Cadastrar Cidade</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="scd-form-control-login-container">
                                        <div>
                                            <label htmlFor="cidade">Cidade:</label>
                                            <input type='text' className='scd-form-control-login mb-3' autoFocus name='nome' required />
                                        </div>
                                        <div>
                                            <label htmlFor="valor">Valor:</label>
                                            <CurrencyInput
                                                className='scd-form-control-login mb-2'
                                                intlConfig={{ locale: 'pt-BR', currency: 'BRA' }}
                                                id="valor"
                                                name="valor"
                                                placeholder="Digite o valor da diária"
                                                prefix='R$ '
                                                fixedDecimalLength={2}
                                                defaultValue={44}
                                                decimalsLimit={2}
                                                disableGroupSeparators={false}
                                                disableAbbreviations={true}
                                                required
                                                
                                            />
                                            
                                        </div>

                                    </div>
                                </div>
                                <div className="scd-btn-login">

                                    <input type='submit' className='btn-login-form' value="Cadastrar" />

                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default CidadeCadastrar;