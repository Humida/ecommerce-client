import axios from "axios";

const product = {
    getProduct: async(conditions, page = 1, limit = 8) => {
        try {
            const products = await axios.post(
                `http://localhost:4000/product/get?page=${page}&limit=${limit}`,
                conditions
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