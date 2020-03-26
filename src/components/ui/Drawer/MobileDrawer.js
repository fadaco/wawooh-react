import React from "react";
import { connect } from 'react-redux';
import { setSelectedCat } from '../../../store/actions/CategoryAction';
import InitialView from "./InitialView";
import NextView from "./NextView";

const MobileDrawer = props => {
    const onCatSelect = (catName, list) => {
        props.setSelectedCat(catName, list)
    };

    return (
        <div style={{ width: window.innerWidth - 100, outline: 'none !important' }}>
            {
                props.selectedDrawer === 'initial'
                ? <InitialView
                        categoryList={props.categoryList}
                        onCatSelect={(categoryName, categoryList) => onCatSelect(categoryName, categoryList)}
                        selectedCategory={props.selectedCategory}
                    />
                : <NextView />
            }
        </div>
    );
};



const mapStateToProps = state => ({
    ...state.category,
    ...state.drawer
});

export default connect(mapStateToProps, { setSelectedCat })(MobileDrawer);
