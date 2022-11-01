import Header2 from '../../components/Header2';
import './styles.css';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../../utils/requests';
import { useEffect, useState } from 'react';

function Login() {

    let newPageTitle = 'SCD - Login';
    document.title = newPageTitle;

    const [matricula, setMatricula] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: `/usuario/?matricula=${matricula}&senha=${senha}`,
            data: {
                matricula: matricula,
                senha: senha
            }
        }

        axios(config).then(response => {
            if (response.status === 200)
                window.location.href=`/usuario/diaria/${response.data.codigo}/${response.data.matricula}/${response.data.tipo}`;
        }).catch((err) => {
            alert("Erro na autenticação!")
        });
        
    }

    return (
        <div>
            <Header2 />
            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card-login">
                            <h2 className="scd-diarias-titulo">Autenticação</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="scd-form-control-login-container">
                                        <input className="scd-form-control-login"
                                            type="text"
                                            placeholder='Matrícula'
                                            value={matricula}
                                            name="matricula"
                                            autoFocus
                                            onChange={(event) => setMatricula(event.target.value)} required />
                                    </div>
                                    <div className="scd-form-control-login-container">

                                        <input className="scd-form-control-login"
                                            type="password"
                                            placeholder='Senha'
                                            value={senha}
                                            name="senha"
                                            onChange={(event) => setSenha(event.target.value)} required />
                                    </div>
                                </div>
                                <div className="scd-btn-login">
                                    <input type='submit' className='btn-login-form' value="Login" />
                                </div>                                
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
}

export default Login;
