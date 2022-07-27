import { useState, useEffect } from "react";

export interface ProductList {
    id: string;
    price: string;
    email: string;
    name: string;
    createdAt: string;
    avatar: string;
    developerEmail: string;
    category: string;
};

export const useFetch = (url: string, ref: any, initialValue: ProductList[]) => {
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (ref.current) {
            (async () => {
                try {
                    const res = await fetch(url);
                    const resJson: ProductList[] = await res.json();
                    setData(resJson);
                } catch (err: any) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            })();
        }
        return () => {
            ref.current = false;
        };
    }, [url, ref]);
    return { loading, data, error };
};