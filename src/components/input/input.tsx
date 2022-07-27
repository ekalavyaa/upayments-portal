import './input.css';


interface PropType {
    type: string;
    inputchange: (value: string) => void;
    placeholder: string;
}
export const Input = (props: PropType) => {
    return (
        <input type={props.type} placeholder={props.placeholder} className='input' onChange={(e) => props.inputchange(e.target.value)} />
    )
}

