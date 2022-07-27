import { useState, useEffect } from "react";

export interface Product {
    id: string;
    price: string;
    email: string;
    name: string;
    createdAt: string;
    avatar: string;
    developerEmail: string;
    category: string;
    description: string;
};

export const useFetch = (url: string, ref: any) => {
    const [data, setData] = useState({} as Product);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (ref.current) {
            (async () => {
                try {
                    const res = await fetch(url);
                    const resJson: Product = await res.json();
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