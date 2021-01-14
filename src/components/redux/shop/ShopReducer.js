import ShopData from "../../pagesapp/shoppage/ShopData"

const initState = {
    collections: ShopData
}

const ShopReducer = (state= initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default ShopReducer