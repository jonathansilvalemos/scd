import './styles.css';
function Login() {

    return (
        <div className="container mt-3 col-sd-4 col-md-4 col-lg-4">
            <h2>SCD Autenticação</h2>
            <form>
                <div className="mb-3 mt-3">
                    <label htmlFor='matricula'>Matrícula:</label>
                    <input type="number" className="form-control" id="matricula" placeholder="Entre com a matrícula" name="matricula" />
                </div>
                <div className="mb-3">
                    <label htmlFor='pwd'>Senha:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Digite a senha" name="senha" />
                </div>

                <button type="submit" className="btn btn-primary">Autenticar</button>
            </form>
        </div>

    );
}

export default Login;