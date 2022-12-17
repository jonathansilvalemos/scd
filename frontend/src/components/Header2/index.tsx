import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header2() {
    return (
        <header>
            <div className="scd-logo-container">
                <a href="/"> <img src={logo} alt="logo" /></a>
                <h1>Sistema de Monitoramento de Diárias</h1>
            </div>
        </header>
    );
}

export default Header2;