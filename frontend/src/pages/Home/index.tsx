import { Link } from 'react-router-dom';

function Home() {
    let newPageTitle = 'SCD - Bem Vindo';
    document.title = newPageTitle;

    return (
        <div className='container mt-5 py-5'>
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">Sistema de Controle de Diárias</h1>
                <p className="lead">Analise os controles de diárias de viagens</p>
                <hr />
                <p>Esta aplicação consiste em exibir um controle de diárias dos motoristas da SMS de São José do Norte.</p>
                <Link to='/login'>
                    <div className='btn btn-primary'>Acessar</div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
