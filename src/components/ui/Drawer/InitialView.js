import React from 'react';
import { NEW_ARRIVAL_PIC_1 } from '../../../config';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setDrawerValues } from '../../../store/actions/DrawerAction';

const InitialView = (props) => {
    const categoryList = props.categoryList || [];

    const newInPage = () => {
        props.history.push('/new-in')
    };

    const BespokePage = () => {
        props.history.push('/bespoke');
    }
    const _onCatSelect = (categoryName, categoryList, categoryId) => {
        props.onCatSelect(categoryName, categoryList);
        props.setDrawerValues('categoryName', categoryName);
        props.setDrawerValues('categoryId', categoryId);
        props.setDrawerValues('selectedDrawer', 'next');
    };

    return (
        <div>
            <div style={styles.categoryStyle} onClick={newInPage}>
                New In
                <img src={NEW_ARRIVAL_PIC_1} alt="new" style={styles.catImage} />
            </div>
            {
                categoryList.map((item) => (
                    <div
                        key={item.id}
                        style={styles.categoryStyle}
                        onClick={() => _onCatSelect(item.categoryName, categoryList, item.id)}
                    >
                        {item.categoryName}
                    </div>
                ))
            }
            <div style={styles.categoryStyle} onClick={BespokePage}>
                Bespoke
                <img src={NEW_ARRIVAL_PIC_1} alt="new" style={styles.catImage} />
            </div>
        </div>
    )
};

const styles = {
    categoryStyle: {
        height: 70,
        backgroundColor: 'whitesmoke',
        padding: '0 15px',
        margin: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        fontSize: 18,
        cursor: 'pointer',
        borderRadius: 5,
    },
    catImage: {
        height: '80%',
        width: 'auto',
        objectFit: 'cover',
        borderRadius: '50%'
    }
};

const mapStateToProps = state => ({
    ...state.drawer
});

const stateActions = {
    setDrawerValues
};

export default connect(mapStateToProps, stateActions)(withRouter(InitialView));