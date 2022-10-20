import Header2 from '../../components/Header2';
import { Link } from 'react-router-dom';

import './styles.css';

function Login() {

    let newPageTitle = 'SCD - Login';
    document.title = newPageTitle;

    return (
        <div>
            <Header2 />
            <main>
                <section id="diarias">
                    <div className="scd-container">

                        <div className="scd-card-login">
                            <h2 className="scd-diarias-titulo">Autenticação</h2>
                            <div>
                                <div className="scd-form-control-login-container">
                                    <input className="scd-form-control-login" type="text" placeholder='Matrícula' name="login" required />
                                </div>
                                <div className="scd-form-control-login-container">

                                    <input className="scd-form-control-login" type="password" placeholder='Senha' name="senha" required />
                                </div>
                            </div>
                            <div className="scd-btn-login">
                                <form>
                                    <Link to='/diaria'>
                                        <input type='submit' className='btn-login-form' value="Login" />
                                    </Link>
                                </form>

                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Login;
