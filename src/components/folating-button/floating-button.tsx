import { useNavigate } from 'react-router-dom'
import './floating-button.css';

const FloatingButton = () => {
    const navigate = useNavigate();

    return (
        <button className='floating-button' onClick={(e) => navigate('/add-product')} type='button'> + </button>
    )
}
export {
    FloatingButton
};