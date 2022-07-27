import { useRef } from 'react';
import Select, { SingleValue } from 'react-select';
import { useFetch, Option } from './catgory-fetch';
import './category.css';

interface PropType {
    selectedCategory?: (value: string) => void;
    uncontrolled?: boolean;
    onChange: (newValue: string, value: SingleValue<Option>) => void;
    onBlur?: any,
    name?: string,
    value?: Option
}

const Category = (props: PropType) => {

    const isComponentMounted = useRef(true);

    const { options } = useFetch(
        ' https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/',
        isComponentMounted
    );

    const handleChange = (value: SingleValue<Option>) => {
        // this is going to call setFieldValue and manually update values.topcis
        props?.onChange('category', value);
    };

    const handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        props.onBlur && props.onBlur('category', true);
    };
    return (
        <Select
            className='select-category'
            classNamePrefix='select'
            id="category"
            placeholder='Category'
            name='category'
            options={options}
            onChange={handleChange}
            onBlur={handleBlur}
            value={props.value}
        />
    );
}

export {
    Category
};