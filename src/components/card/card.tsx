import { useNavigate } from 'react-router-dom';
import './card.css';

interface Props {
    avatar: string;
    name: string;
    price: string;
    id: string;
}

export const Card = (props: Props) => {
    const navigate = useNavigate();

    return (
        <div className='card flex flex-col' onClick={(e) => navigate(`/products/${props.id}`)}>
            <div className='avatar flex align-middle justify-center'>
                <img src={props.avatar} alt='product' />
            </div>
            <div className='name truncate mt-4 font-semibold'>
                {props.name}
            </div>
            <div className='price mt-2 font-semibold'>
                ${props.price}
            </div>
        </div>
    )
}