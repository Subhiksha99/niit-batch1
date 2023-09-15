const initialState = {
    products: [],
    product: {}
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };
        case "GET_PRODUCT_ID":
            return;
        case "ADD_PRODUCT":
            return;
        case "UPDATE_PRODUCT":
            return;
        case "DELETE_PRODUCT":
            return;
        default:
            return state.products;
    }
}

export default productReducer;

