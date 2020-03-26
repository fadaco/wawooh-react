import React from "react";
import reducers from "./store/reducers";
import Thunk from "redux-thunk";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./components/auth/Signup";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Bespoke from "./pages/Bespoke";
import Profile from "./pages/Profile";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Customize from "./pages/Customize";
import NewIn from "./pages/NewIn";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Shipping from "./pages/Shipping";
import Aboutus from "./pages/Aboutus";
import Feedback from "./pages/Feedback";
import Faq from "./pages/Faq";
import ResetSuccess from "./pages/ResetSuccess";
import BespokeSuccess from "./pages/bespoke-success";
import ProductDetails from "./pages/ProductDetails";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import SearchResult from "./pages/SearchResult";
import DesignerProducts from "./pages/DesignerProducts";
import Who from "./pages/Who";
import AboutEvent from "./pages/aibout-event";
import AboutBrand from "./pages/about-brand";
import SizeChart from "./pages/Size-chart";
import StyleCatagolue from './pages/StyleCatalogue'
import BespokeRequest from './pages/BespokeRequest'
import NotFound from './pages/404';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SubCategoryProducts from "./pages/SubCategoryProducts";

const store = createStore(reducers, {}, applyMiddleware(Thunk));

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/bespoke" component={Bespoke} />
        <Route path="/profile" component={Profile} />
        <Route
          path="/category/:category/:subCategory"
          component={SubCategoryProducts}
        />
        <Route path="/style-catalogue" component={StyleCatagolue} />
        <Route path="/bespoke-request" component={BespokeRequest} />
        <Route path="/category/:category" component={CategoryProducts} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/customize/:id" component={Customize} />
        <Route path="/new-in" component={NewIn} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/about" component={Aboutus} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/faq" component={Faq} />
        <Route path="/successpage" component={ResetSuccess} />
        <Route path="/product/:name" component={ProductDetails} />
        <Route path="/checkout-successful" component={CheckoutSuccess} />
        <Route path="/search/:query" component={SearchResult} />
        <Route path="/designer/:name" component={DesignerProducts} />
        <Route path="/about/who-we-are" component={Who} />
        <Route path="/about/events" component={AboutEvent} />
        <Route path="/about/brands" component={AboutBrand} />
        <Route path="/about" component={Aboutus} />
        <Route path="/size-chart" component={SizeChart} />
        <Route path="/thank-you" component={BespokeSuccess}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
