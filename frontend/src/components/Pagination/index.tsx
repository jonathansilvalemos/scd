import { UsuarioPage } from 'types/usuario';
import seta from '../../assets/img/seta.svg';
import './styles.css';

type Props = {
    page: UsuarioPage;
    onChange: Function;
}

function Pagination({ page, onChange } : Props) {

    return (
        <div className='scd-pagination-container'>
            <div className='scd-pagination-box'>
                <button className='scd-pagination-button' 
                disabled={page.first} onClick={() => onChange(page.number - 1)}>
                    <img src={seta} className="scd-flip-horizontal" alt='setaEsquerda'/>
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className='scd-pagination-button' 
                disabled={page.last} onClick={() => onChange(page.number + 1)}>
                    <img src={seta} alt="setaDireita" />
                </button>
                
            </div>
        </div>

    );
}

export default Pagination;