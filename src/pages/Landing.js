import React from 'react'
import Arrival from '../components/Landing/Arrival';
import DesignerBrand from '../components/Landing/DesignerBrand'
import Banner from '../components/Landing/banner'
import FrequentlyViewed from '../components/Landing/FrequentlyBought'
import Search from "../components/search";
// import BlogList from '../components/Landing/Blog'
// import BlogDetails from '../components/Landing/Blog-details';
import {connect} from "react-redux";
import { getDesignerLogo } from '../store/actions/DesignerAction';
import Layout from "../components/ui/Layout";

class Landing extends React.Component {
    componentDidMount() {
        const body = {init: 0, size: 100};
        this.props.getDesignerLogo(body, this.props.logoList);
    }

    render() {
        return (
            <Layout>
                <Search/>
                <div style={{background: 'white'}}>
                    <Banner/>
                    {
                        this.props.logoList.length > 0
                            ? <DesignerBrand/>
                            : null
                    }
                    <Arrival/>
                    <FrequentlyViewed/>
                    {/* <BlogList /> */}
                    {/* <BlogDetails /> */}
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    ...state.designer
});

export default connect(mapStateToProps, { getDesignerLogo })(Landing);