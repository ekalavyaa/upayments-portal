export interface Product {
    price: string;
    name: string;
    avatar: string;
    category: string;
    description: string;
};

export const addProductApi = async (url: string, data: Product) => {
    try {
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        };
        await fetch(url, requestOptions);
    } catch (err: any) {
        return false;
    } finally {
        return true;
    }
};