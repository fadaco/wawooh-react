 export function SAVE_TOKEN(value) {
    localStorage.setItem('token', value);
}

export function GET_TOKEN() {
    return localStorage.getItem('token');
}

export function SAVE_CART(value){
    localStorage.setItem('cart', value);
}

export function GET_CART(){
   const val = localStorage.getItem('cart');
   return val ? JSON.parse(val) : [];
}

export function CLEAR_STORED_CART() {
    localStorage.removeItem('cart');
}

export const SAVE_CATEGORIES = (val) => localStorage.setItem('categories', JSON.stringify(val));

export const GET_SAVED_CATEGORIES = () => {
    const data = localStorage.getItem('categories');
    return data ? JSON.parse(data) : null;
}