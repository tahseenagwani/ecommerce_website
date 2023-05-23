
const BASE_URL = "http://localhost:3001"

const fetcher = async (url) => {
    const responseObject = { errorMessage: '', data: [] };

    try {
        const response = await fetch(BASE_URL + url)
        console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP ERROR ${response.status}`);
        }
        const responsedata = await response.json()
        responseObject.errorMessage = ''
        responseObject.data = responsedata;
    }
    catch (err) {
        responseObject.errorMessage = err.message;

    }
    return responseObject
}

export const getCategories = () => {
    return fetcher("/categories")
}
export const getProducts = (id) => {
    return fetcher("/products?catId=" + id)
}

export const getProductById=(id)=>{
    return fetcher("/products/" + id)
}