import logo from '../../assets/img/logo.svg';
import './styles.css';


function Header()  {
    return (
        <header>
            <div className="scd-logo-container">
               <a href="/"> <img src={logo} alt="logo" /></a>                               
            </div>            
        </header>
    );
}

export default Header;