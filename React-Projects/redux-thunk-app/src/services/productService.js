import axios from "axios";

class ProductService {

    baseUrl = "https://fakestoreapi.com";

    // GET - all products
    getProducts = async () => { // states - pending, fullfilled, rejected
        return await axios.get(this.baseUrl + "/products");
    }

    // GET - product by id
    getProductById = async (id) => { // states - pending, fullfilled, rejected
        return await axios.get(this.baseUrl + "/products/" + id);
    }

    // POST - Add product
    addProduct = async (newProduct) => { // states - pending, fullfilled, rejected
        return await axios.post(this.baseUrl + "/products", newProduct);
    }

    // PUT - update product
    updateProduct = async (product) => { // states - pending, fullfilled, rejected
        return await axios.put(this.baseUrl + "/products/" + product.id, product);
    }

    // DELETE - Delete product by id
    deleteProduct = async (id) => { // states - pending, fullfilled, rejected
        return await axios.delete(this.baseUrl + "/products/" + product.id);
    }
}

export default new ProductService();

