import { Input } from '../input/input';

import './search.css';


interface PropType {
    search: Function;
}

export const Search = (props: PropType) => {

    const onchange = (value: string) => {
        props.search(value);
    }

    return (
        <div className='search'>
            <Input type='text' placeholder='Search' inputchange={onchange} />
        </div>
    )
} 