import { combineReducers } from 'redux';
import categoryReducer from './CategoryReducer';
import UserReducer from './UserReducer';
import cartReducer from './CartReducer';
import ProductReducer from './ProductReducer';
import MeasurementReducer from "./MeasurementReducer";
import CustomizeReducer from "./CustomizeReducer";
import ProfileReducer from './ProfileReducer';
import orderReducer from './OrderReducer';
import profileMeasurement from './ProfileMeasurementReducer';
import checkoutReducer from './CheckoutReducer';
import FilterReducer from './FilterReducer';
import shippingReducer from './ShippingReducer';
import DrawerReducer from './DrawerReducer';
import DesignerReducer from "./DesignerReducer";
import ProductDetailsReducer from "./ProductDetailsReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import BespokeReducer from './BespokeReducer';

export default combineReducers({
    category: categoryReducer,
    user: UserReducer,
    cart: cartReducer,
    product: ProductReducer,
    measurement: MeasurementReducer,
    customize: CustomizeReducer,
    orders: orderReducer,
    profileMeasurement: profileMeasurement,
    profile: ProfileReducer,
    filter: FilterReducer,
    checkout: checkoutReducer,
    shippingFee: shippingReducer,
    drawer: DrawerReducer,
    designer: DesignerReducer,
    productDetails: ProductDetailsReducer,
    subCategory: SubCategoryReducer,
    bespoke: BespokeReducer
});
