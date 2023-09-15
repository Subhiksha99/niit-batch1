const initialState = {
    products: [],
    product: {}
};



const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };
        case "GET_PRODUCT":
            return { ...state, product: action.payload };
        case "ADD_PRODUCT":
            return { ...state, products: [...products, action.payload] }; // [p1, p2, p3, p4]
        case "UPDATE_PRODUCT":
            return state.products.map((p) =>
                p.id === action.payload.id ? action.payload : p
            );
        case "DELETE_PRODUCT":
            const products = state.products.filter((p) => p.id !== action.payload.id); // p1, p3, p4
            return { ...state, products: products };
        default:
            return state.products;
    }
}

export default productReducer;

