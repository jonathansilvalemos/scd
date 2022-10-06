import GithubIcon from '../../assets/img/github.svg';
import './styles.css';

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="scd-nav-content">
                    <h1>SCDiária</h1>
                     <a href="http://github.com/jonathansilvalemos">
                        <div className="scd-contact-container">
                            <img src={GithubIcon} alt="Github" />
                            <p className="scd-contact-link">/jonathansilvalemos</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;

