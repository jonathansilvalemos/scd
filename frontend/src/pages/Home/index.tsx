import '../../init.js';
import Header2 from '../../components/Header2';
import { Link } from 'react-router-dom';

function Home() {
    
    let newPageTitle = 'SCD - Bem Vindo';
    document.title = newPageTitle;

    return (
        <div>
            <Header2 />
            <main>
                <section id="diarias">
                    <div className="scd-container">
                        <div className='container py-5'>
                            <div className="jumbotron jumbotron-fluid">
                                <h1 className="display-4">Sistema de Monitoramento de Diárias</h1>
                                <p className="lead">Sistema para analisar e monitorar diárias de viagens</p>
                                <hr />
                                <p>Esta aplicação consiste em exibir um monitoramento de diárias de motoristas.</p>
                                <Link to='/usuario/login'>
                                    <div className='btn btn-primary'>Acessar</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
