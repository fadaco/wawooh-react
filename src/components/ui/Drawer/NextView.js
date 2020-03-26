import React from 'react';
import { BANNER_PIC, PRODUCT_TYPE } from '../../../config';
import { connect } from 'react-redux';
import { setDrawerValues, getSubCategoryList, resetDrawerValues, toggleDrawer } from '../../../store/actions/DrawerAction';
import {resetSubCategoryValues} from "../../../store/actions/SubCategoryAction";
import {withRouter} from "react-router-dom";

const NextView = (props) => {
    const goBack = () => {
        props.resetDrawerValues();
    };

    const onSelect = (item) => {
        const customUrl = `${item.subCategory.trim().replace(/ /g, '-')}-${item.id}`;
        props.history.push(`/category/${props.categoryName}/${customUrl}`);
        props.toggleDrawer(false);
    };

    const viewAll = () => {
        props.history.push(`/category/${props.categoryName}`);
        props.toggleDrawer(false);
    };

    return (
        <div>
            <div style={styles.bgDiv}>
                <div style={styles.overlay}>
                    <div
                        style={{padding: '20px 0 0 20px'}}
                        onClick={goBack}
                    >
                        <i className="fas fa-arrow-left" style={{color: '#fff', fontSize: 20}}></i>
                    </div>

                    <div style={styles.selectedCat}>
                        {props.categoryName}
                    </div>

                    <div style={styles.categoryDiv}>
                    {
                        Object.keys(PRODUCT_TYPE).map((item) => (
                            <div
                                style={props.productTypeId === PRODUCT_TYPE[item] ? styles.selectedStyle : null}
                                key={PRODUCT_TYPE[item]}
                                onClick = {() => props.getSubCategoryList(PRODUCT_TYPE[item], props.selectedCategory)}
                            >{item}</div>
                        ))
                    }
                    </div>
                </div>
            </div>

            <div>
                <div style={styles.listItem} onClick={viewAll}>
                    <div style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>View All</div>
                    <i className="fas fa-caret-right" style={styles.caret}></i>
                </div>

                {
                    props.subCategory.map((item) => (
                        <div key={item.id} style={styles.listItem} onClick={() => onSelect(item)}>
                            <div style={{textTransform: 'capitalize'}}>{item.subCategory}</div>
                            <i className="fas fa-caret-right" style={styles.caret}></i>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

const styles = {
    selectedStyle: {
        borderBottom: '2px solid var(--primary-color)'
    },
    categoryDiv: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        alignItems: "flex-end",
        paddingBottom: 10,
        fontWeight: "bold",
        color: '#fff',
    },
    bgDiv: {
        backgroundImage: `url(${BANNER_PIC})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        height: 150,
        display: 'flex',
        flexDirection: 'column',
    },
    selectedCat: {
        color: '#fff',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    listItem: {
        display: 'flex',
        padding: '0 15px',
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        fontSize: 16,
        outline: 'none !important'
    },
    caret: {
        fontSize: 20,
        color: 'rgba(0,0,0,0.6)'
    }
};

const mapStateToProps = state => ({
    ...state.drawer,
    ...state.category
});

const stateActions = {
    setDrawerValues,
    getSubCategoryList,
    resetDrawerValues,
    toggleDrawer,
    resetSubCategoryValues
};

export default connect(mapStateToProps, stateActions)(withRouter(NextView));