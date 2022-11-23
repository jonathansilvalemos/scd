import Header2 from '../../components/Header2';
import './styles.css';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../../utils/requests';
import { useEffect, useState } from 'react';
import { Usuario } from 'types/usuario';


function Login() {

    let newPageTitle = 'SCD - Login';
    document.title = newPageTitle;

    const [mat, setMat] = useState("");
    const [pass, setPass] = useState("");
    const [usuario, setUsuario] = useState<Usuario>();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: `/usuario/login/?matricula=${mat}&senha=${pass}`,
            data: {
                matricula: mat,
                senha: pass
            }
        }


        await axios(config).then(response => {
            if (response.status === 200) {
                window.location.href = `/usuario/diaria/${response.data.codigo}/${response.data.matricula}/${response.data.tipo}`;
            } else {
                alert("Erro");
            }
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
                                            value={mat}
                                            name="matricula"
                                            autoFocus
                                            onChange={(event) => setMat(event.target.value)} required />
                                    </div>
                                    <div className="scd-form-control-login-container">

                                        <input className="scd-form-control-login"
                                            type="password"
                                            placeholder='Senha'
                                            value={pass}
                                            name="senha"
                                            onChange={(event) => setPass(event.target.value)} required />
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
