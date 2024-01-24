import data from "../../public/json/ingredients.json";


export const getOneIngredient = async () => {
    const promise = new Promise((res) => {
        res(data);
    });
    return await promise;
}

export const getIngredientById = async(id) => {
    const promise = new Promise((res) => {
        res(data.find((product) => product.id === id));
    }); 
    return await promise;
}