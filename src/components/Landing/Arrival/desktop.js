import React from 'react';
import { NEW_ARRIVAL_PIC_1, NEW_ARRIVAL_PIC_2 } from '../../../config';
import { NavLink } from 'react-router-dom';

const styles = {
    img: {
        width: '100%',
        height: 653,
        objectFit: 'cover',
    },
    parentDiv: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0px 30px',
    },
    childDiv: {
        width: '50%',
        margin: '0px 20px'
    }
}

export default () => (
    <div style={styles.parentDiv} className='arrivalDiv'>
        <div style={styles.childDiv}>
            <NavLink to="/bespoke">
                <img src={NEW_ARRIVAL_PIC_1} style={styles.img} alt={"arrival-img"} />
            </NavLink>
        </div>
        <div style={styles.childDiv}>
            <NavLink to="/bespoke">
                <img src={NEW_ARRIVAL_PIC_2} style={styles.img} alt={"arrival-img"} />
            </NavLink>
        </div>
    </div>
)