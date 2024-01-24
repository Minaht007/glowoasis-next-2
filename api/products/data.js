import data from "../../public/json/productPage.json";


export const getOneProduct = async () => {
    const promise = new Promise((res) => {
        res(data);
    });
    return await promise;
}

export const getProductById = async(id) => {
    const promise = new Promise((res) => {
        res(data.find((product) => product.id === id));
    }); 
    return await promise;
}