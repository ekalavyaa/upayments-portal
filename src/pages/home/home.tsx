
import React, { useEffect, useRef, useState } from 'react';
import { useFetch, ProductList } from './fetch-list';
import { Card } from '../../components/card/card';
import { Search } from '../../components/search/search';
import { Category } from '../../components/category/category';
import { Option } from '../../components/category/catgory-fetch';
import { SingleValue } from 'react-select';
import { FloatingButton } from '../../components/folating-button/floating-button';

const Home = () => {
    const isComponentMounted = useRef(true);

    const { data, loading } = useFetch(
        'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/',
        isComponentMounted,
        []
    );
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(data);
    }, [data])

    const search = (value: string) => {
        setFilteredData(data?.filter((product: ProductList) => {
            return (product.name.includes(value) || product.category?.includes(value))
        })
        );
    }

    return (
        <React.Fragment>
            <FloatingButton />
            <div className='flex flex-row justify-between align-middle'>
                <div className='w-80'><Search search={search} /></div>
                <div className='w-80'><Category onChange={(label: string, value: SingleValue<Option>) => { search(value?.value as string) }} /> </div>
            </div>
            <div className='flex flex-row flex-wrap justify-around gap-12 mt-14 px-20'>
                {loading ? (
                    <div>Loading data...</div>
                ) : (
                    filteredData.map((product: ProductList, index: number) => (
                        <Card key={index} {...product} />
                    ))
                )}
            </div>

        </React.Fragment >
    );
}

export {
    Home
}