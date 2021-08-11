import axios from "axios";

const product = {
    getProduct: async(query, page = 1, limit = 4) => {
        try {
            const products = await axios.get(
                `http://localhost:4000/product/query/?${query}&page=${page}?&limit=${limit}`
            );
            return products;
        } catch (err) {
            throw err;
        }
    },
    createProduct: async() => {},
    updateProduct: async() => {},
    deleteProduct: async() => {},
};

export default product;