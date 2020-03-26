export const DESKTOP_WIDTH = 951;
export const MOBILE_WIDTH = 950;

export const NairaSign = '₦';
export const FACEBOOK_APP_ID = '568085130358453';

export const BANNER_PIC = 'https://res.cloudinary.com/har9qnw3d/image/upload/g_auto/v1554799451/banners/shop/try_it.jpg';
export const NEW_ARRIVAL_PIC_1 = 'https://res.cloudinary.com/har9qnw3d/image/upload/g_auto/v1551093302/banners/shop/colorful.jpg';
export const NEW_ARRIVAL_PIC_2 = 'https://res.cloudinary.com/har9qnw3d/image/upload/g_auto/v1551093306/banners/shop/19_1.jpg';
export const TEST_PRODUCT_IMAGE = 'https://res.cloudinary.com/har9qnw3d/image/upload/g_auto/v1553010755/productpictures/Bagsprodpic784630018993898882389786667635997310509.jpg';

// export const BASE_URL = 'https://wawooh.com:8083/fashion';
export const BASE_URL = 'https://wawooh.com:8094/fashion/';
// export const BASE_URL = 'http://192.168.10.26:8094/fashion/';

export const ApiEndpoints = {
    CATEGORIES: 'product/getcategories',
    USER_LOGIN: 'signin',
    USER_REGISTER: 'register',
    USER_ADDRESS: 'secure/address/getaddress',
    SAVE_ADDRESS: 'secure/address/addaddress',
    EDIT_ADDRESS: 'secure/address/updateaddress',
    DELETE_ADDRESS: id => `secure/address/${id}/deleteaddress`,
    TRACK_ORDER: orderNum  => `/secure/customer/order/${orderNum}/getorderbynum`,
    GET_USER_DETAILS: 'getuserdetails',
    BESPOKE_BIDS: 'secure/bespoke/order/bespokes',
    VIEW_BESPOKE_QUOTES: id => `secure/bespoke/order/${id}/bids`,
    EDIT_USER_DETAILS: 'secure/edituser',
    GET_PRODUCT_BY_CATEGORY: 'product/getproductsbycat',
    GET_PRODUCT_BY_SUBCATEGORY: 'product/getproductsbysub',
    ADD_TO_CART: 'secure/customer/order/addtocart',
    GET_CART: 'secure/customer/order/getcart/NGN',
    EMPTY_CART: 'secure/customer/order/emptycart',
    DELETE_CART_ITEM: id => `secure/customer/order/${id}/deletecart`,
    SAVE_MEASUREMENT: 'secure/customization/add',
    GET_MEASUREMENT: 'secure/customization/getusermeasurements',
    EDIT_MEASUREMENT: id => `secure/customization/${id}/get`,
    UPDATE_MEASUREMENT: 'secure/customization/update',
    DELETE_MEASUREMENT: id => `secure/customization/${id}/delete`,
    GET_NEW_ARRIVALS: 'product/getnewproducts',
    FREQUENTLY_BOUGHT: 'product/getfreqboughtproducts/NGN',
    USER_ORDER: 'secure/customer/order/getuserorder',
    FORGOT_PASSWORD: 'forgotpassword',
    SAVE_TRANSFER_INFO: 'order/payment/savetransferinfo',
    CHECKOUT: 'g_check/guestadd_order',
    ADD_ORDER: 'secure/customer/order/addorder',
    GET_PRODUCT_DETAILS: productId => `product/${productId}/NGN/getproductbyid/review`,
    GET_SHIPPING_FEE: 'shipping_fee',
    GET_USER_SHIPPING_PRICE: 'secure/customer/order/getordershippingprice',
    GET_SUBCATEGORY: catId => `product/${catId}/getsubcategories`,
    PRODUCT_SEARCH: 'se/search',
    DESIGNER_LOGOS: 'designer/getdesignerslogo',
    DESIGNER_PRODUCTS: designerId => `product/${designerId}/NGN/getdesignerproducts_`,
    STYLE_CATALOGUES: 'bespokestyle/getbespokestyles',
    ADD_BESPOKE_REQUEST: 'secure/bespoke/order/add',
    BESPOKE_PRODUCTS_ONLY: 'product/getbespokeproducts',
    ADD_TO_WISHLIST: 'secure/wishlist/add',
    DELETE_FROM_WISHLIST : id => `secure/wishlist/${id}/delete`
};

export const Messages = {

};

export const Roles = {
    USER: 'user',
    DESIGNER: 'designer',
    QA: 'qa'
};

export const PRODUCT_TYPE = {
    Clothings: 1,
    Accessories: 2,
    Shoes: 3
};
