
import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from './fetch-product';
import './product.css';


const Product = () => {
    const isComponentMounted = useRef(true);

    const { id } = useParams();

    const { data, loading } = useFetch(
        `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`,
        isComponentMounted
    );

    return (
        <React.Fragment>
            {
                loading ?
                    (<div className='text-center'>Loading data...</div>)
                    :
                    (
                        <div className='flex flex-wrap flex-col'>
                            <div className='flex flex-row gap-10 flex-wrap'>
                                <div className='image'>
                                    <img src={data.avatar} alt='product' />
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <div className='text-4xl'>
                                        {data.name}
                                    </div>
                                    <div className='text-3xl'>
                                        ${data.price}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col border-t-4 my-4 border-t-slate-500'>
                                <div className='text-3xl mt-7'>
                                    Description
                                </div>
                                <div className='text-2xl mt-5'>
                                    {data.description}
                                </div>
                            </div>
                        </div>
                    )
            }
        </React.Fragment>)
}
export {
    Product
}