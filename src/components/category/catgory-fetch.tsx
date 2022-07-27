import { useState, useEffect } from "react";

export interface CategoryType {
    id: string;
    name: string;
};

export interface Option {
    label: string;
    value: string;
};
export const useFetch = (url: string, ref: any) => {
    const [options, setOptions] = useState([] as Option[]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const transFormOptions = (options: CategoryType[]): Option[] => options.map((category: CategoryType) => ({ value: category.id, label: category.name }));

    useEffect(() => {
        if (ref.current) {
            (async () => {
                try {
                    const res = await fetch(url);
                    const resJson: CategoryType[] = await res.json();
                    setOptions(transFormOptions(resJson));
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
    return { loading, options, error };
};