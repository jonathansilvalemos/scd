import { DiariaPage } from 'types/diaria';
import seta from '../../assets/img/seta.svg';

type Props = {
    page: DiariaPage;
    onChange: Function;
}

function PaginationDiaria({ page, onChange } : Props) {

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

export default PaginationDiaria;